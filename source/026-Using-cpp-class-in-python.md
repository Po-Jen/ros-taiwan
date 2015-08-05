<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [Using a C++ class in Python](/action/fullsearch/ROS/Tutorials/Using%20a%20C%2B%2B%20class%20in%20Python?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUsing+a+C%2B%2B+class+in+Python%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span><span class="anchor" id="line-3-1"></span><span class="anchor" id="line-4-1"></span><span class="anchor" id="line-5-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #bbceee">![(!)](/moin_static197/rostheme/img/idea.png "(!)")It is appreciated that problems/questions regarding this tutorial are asked on [answers.ros.org](http://answers.ros.org). Don't forget to include in your question the link to this page, versions of your OS & ROS, and also add appropriate tags.</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-6-1"></span><span class="anchor" id="line-7-1"></span><span class="anchor" id="line-8-1"></span>

## Using a C++ class in Python

<span class="anchor" id="line-9-1"></span>**Description:** This tutorial illustrates a way to use a C++ class with ROS messages in Python.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span>**Keywords:** C++, Python, bindings  

<span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Tutorial Level:** ADVANCED   

<span class="anchor" id="line-16-1"></span><span class="anchor" id="line-17-1"></span>**Next Tutorial:** [Writing a Tutorial](/WritingTutorials)  

<span class="anchor" id="line-18-1"></span>

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<div class="table-of-contents">

Contents

1.  [Class without NodeHandle](#Class_without_NodeHandle)
    1.  [Creating the package and writing the C++ class](#Creating_the_package_and_writing_the_C.2B-.2B-_class)
    2.  [Binding, C++ part](#Binding.2C_C.2B-.2B-_part)
    3.  [Binding, Python part](#Binding.2C_Python_part)
    4.  [Glueing everything together](#Glueing_everything_together)
    5.  [Testing the binding](#Testing_the_binding)
2.  [Class with NodeHandle](#Class_with_NodeHandle)
3.  [Class with container of ROS messages](#Class_with_container_of_ROS_messages)
    1.  [`std::vector<M>` as return type](#A.60std::vector.3CM.3E.60_as_return_type)
    2.  [`std::vector<M>` as argument type](#A.60std::vector.3CM.3E.60_as_argument_type)

</div>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

This tutorial illustrates a way to use a C++ class with ROS messages in Python. The Boost Python library is used. The difficulty is to translate Python objects of ROS messages written in pure Python into equivalent C++ instances. This translation will be done through serialization/deserialization. The source files can be found at [https://github.com/galou/python_bindings_tutorial](https://github.com/galou/python_bindings_tutorial).<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

Another solution is to use classical ROS services, the server written in C++ will be a wrapper around the C++ class and the client, C++ or Python, will call the service. The solution proposed here does not create a ROS node, provided the class to be wrapped does not make use of <tt class="backtick">ros::NodeHandle</tt>.<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

Another solution is to write a wrapper for all needed ROS messages and their dependencies. Some apparently deprecated package proposed some solutions for the automation of this task: [genpybindings](https://github.com/mkjaergaard/genpybindings.git) and [boost_ python_ros](https://github.com/bhaskara/boost_python_ros.git).<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span>

## Class without NodeHandle

<span class="anchor" id="line-35"></span>

Because roscpp is not initialized when calling <tt class="backtick">rospy.init_node</tt>. <tt class="backtick">ros::NodeHandle</tt> instances cannot be used in the C++ class without generating an error. If the C++ does not make use of <tt class="backtick">ros::NodeHandle</tt>, this is no issue though.<span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span>

### Creating the package and writing the C++ class

<span class="anchor" id="line-38"></span>

Create a package and create the C++ class for which we will want to make a Python binding. This class uses ROS messages as arguments and return type.<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span>

<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-2"></span>

<span class="anchor" id="line-2-2"></span><span class="anchor" id="line-3-2"></span><span class="anchor" id="line-4-2"></span><span class="anchor" id="line-5-2"></span><span class="anchor" id="line-6-2"></span><span class="anchor" id="line-7-2"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-22c83b30e90a8839880e376293ba5d1955d19547\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-22c83b30e90a8839880e376293ba5d1955d19547" lang="en"><span class="line"><span class="LineNumber">[1](#CA-22c83b30e90a8839880e376293ba5d1955d19547_1)</span> <span class="LineAnchor" id="CA-22c83b30e90a8839880e376293ba5d1955d19547_1"></span><span class="ID">roscreate</span><span class="SPChar">-</span><span class="ID">pkg</span> <span class="Comment"># ... to be completed</span></span>
<span class="line"><span class="LineNumber">[2](#CA-22c83b30e90a8839880e376293ba5d1955d19547_2)</span> <span class="LineAnchor" id="CA-22c83b30e90a8839880e376293ba5d1955d19547_2"></span><span class="ResWord">cd</span> <span class="ID">python_bindings_tutorial</span><span class="SPChar">/</span><span class="ID">include</span><span class="SPChar">/</span><span class="ID">python_bindings_tutorial</span></span>
<span class="line"><span class="LineNumber">[3](#CA-22c83b30e90a8839880e376293ba5d1955d19547_3)</span> <span class="LineAnchor" id="CA-22c83b30e90a8839880e376293ba5d1955d19547_3"></span><span class="ID">touch</span> <span class="ID">add_two_ints</span><span class="SPChar">.</span><span class="ID">h</span></span>
<span class="line"><span class="LineNumber">[4](#CA-22c83b30e90a8839880e376293ba5d1955d19547_4)</span> <span class="LineAnchor" id="CA-22c83b30e90a8839880e376293ba5d1955d19547_4"></span><span class="ID">rosed</span> <span class="ID">python_bindings_tutorial</span> <span class="ID">add_two_ints</span><span class="SPChar">.</span><span class="ID">h</span></span>
</pre>

</div>

</div>

<span class="anchor" id="line-50"></span>

<span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-3"></span>

<span class="anchor" id="line-2-3"></span><span class="anchor" id="line-3-3"></span><span class="anchor" id="line-4-3"></span><span class="anchor" id="line-5-3"></span><span class="anchor" id="line-6-3"></span><span class="anchor" id="line-7-3"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b" lang="en"><span class="line"><span class="LineNumber">[1](#CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_1)</span> <span class="LineAnchor" id="CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_1"></span><span class="ID">catkin_create_pkg</span> <span class="ID">python_bindings_tutorial</span> <span class="ID">rospy</span> <span class="ID">roscpp</span> <span class="ID">std_msgs</span></span>
<span class="line"><span class="LineNumber">[2](#CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_2)</span> <span class="LineAnchor" id="CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_2"></span><span class="ResWord">cd</span> <span class="ID">python_bindings_tutorial</span><span class="SPChar">/</span><span class="ID">include</span><span class="SPChar">/</span><span class="ID">python_bindings_tutorial</span></span>
<span class="line"><span class="LineNumber">[3](#CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_3)</span> <span class="LineAnchor" id="CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_3"></span><span class="ID">touch</span> <span class="ID">add_two_ints</span><span class="SPChar">.</span><span class="ID">h</span></span>
<span class="line"><span class="LineNumber">[4](#CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_4)</span> <span class="LineAnchor" id="CA-8aa525b03f510dc8c59c65b5ae73bbc6d8adfd8b_4"></span><span class="ID">rosed</span> <span class="ID">python_bindings_tutorial</span> <span class="ID">add_two_ints</span><span class="SPChar">.</span><span class="ID">h</span></span>
</pre>

</div>

</div>

<span class="anchor" id="line-60"></span>

The content of <tt class="backtick">include/python_bindings_tutorial/add_two_ints.h</tt> will be:<span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span>

<span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span><span class="anchor" id="line-1-4"></span>

<div class="highlight cpp">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-6f94133aee876881b08e87046574b078b53285e0\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-6f94133aee876881b08e87046574b078b53285e0" lang="en"><span class="line"><span class="LineNumber">[1](#CA-6f94133aee876881b08e87046574b078b53285e0_1)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_1"></span><span class="anchor" id="line-1-5"></span><span class="Preprc">#</span><span class="Preprc">ifndef PYTHON_BINDINGS_TUTORIAL_ADD_TWO_INTS_H</span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[2](#CA-6f94133aee876881b08e87046574b078b53285e0_2)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_2"></span><span class="anchor" id="line-2-4"></span><span class="Preprc"></span><span class="Preprc">#</span><span class="Preprc">define PYTHON_BINDINGS_TUTORIAL_ADD_TWO_INTS_H</span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-6f94133aee876881b08e87046574b078b53285e0_3)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_3"></span><span class="anchor" id="line-3-4"></span><span class="Preprc"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[4](#CA-6f94133aee876881b08e87046574b078b53285e0_4)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_4"></span><span class="anchor" id="line-4-4"></span><span class="Preprc">#</span><span class="Preprc">include <std_msgs</span><span class="Preprc">/</span><span class="Preprc">Int64.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[5](#CA-6f94133aee876881b08e87046574b078b53285e0_5)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_5"></span><span class="anchor" id="line-5-4"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[6](#CA-6f94133aee876881b08e87046574b078b53285e0_6)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_6"></span><span class="anchor" id="line-6-4"></span><span class="ResWord">namespace</span> <span class="ID">python_bindings_tutorial</span> {</span>
<span class="line"><span class="LineNumber">[7](#CA-6f94133aee876881b08e87046574b078b53285e0_7)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_7"></span><span class="anchor" id="line-7-4"></span></span>
<span class="line"><span class="LineNumber">[8](#CA-6f94133aee876881b08e87046574b078b53285e0_8)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_8"></span><span class="anchor" id="line-8-2"></span><span class="ResWord">class</span> <span class="ID">AddTwoInts</span></span>
<span class="line"><span class="LineNumber">[9](#CA-6f94133aee876881b08e87046574b078b53285e0_9)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_9"></span><span class="anchor" id="line-9-2"></span>{</span>
<span class="line"><span class="LineNumber">[10](#CA-6f94133aee876881b08e87046574b078b53285e0_10)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_10"></span><span class="anchor" id="line-10-2"></span>  <span class="ResWord">public</span>:</span>
<span class="line"><span class="LineNumber">[11](#CA-6f94133aee876881b08e87046574b078b53285e0_11)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_11"></span><span class="anchor" id="line-11-2"></span>    <span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">add</span>(<span class="ResWord">const</span> <span class="ID">std_msgs</span>::<span class="ID">Int64</span>& <span class="ID">a</span>, <span class="ResWord">const</span> <span class="ID">std_msgs</span>::<span class="ID">Int64</span>& <span class="ID">b</span>);</span>
<span class="line"><span class="LineNumber">[12](#CA-6f94133aee876881b08e87046574b078b53285e0_12)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_12"></span><span class="anchor" id="line-12-2"></span>};</span>
<span class="line"><span class="LineNumber">[13](#CA-6f94133aee876881b08e87046574b078b53285e0_13)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_13"></span><span class="anchor" id="line-13-2"></span></span>
<span class="line"><span class="LineNumber">[14](#CA-6f94133aee876881b08e87046574b078b53285e0_14)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_14"></span><span class="anchor" id="line-14-2"></span>} <span class="Comment">// namespace python_bindings_tutorial</span></span>
<span class="line"><span class="LineNumber">[15](#CA-6f94133aee876881b08e87046574b078b53285e0_15)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_15"></span><span class="anchor" id="line-15-2"></span><span class="Comment"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[16](#CA-6f94133aee876881b08e87046574b078b53285e0_16)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_16"></span><span class="anchor" id="line-16-2"></span><span class="Preprc">#</span><span class="Preprc">endif</span> <span class="Comment">// PYTHON_BINDINGS_TUTORIAL_ADD_TWO_INTS_H</span></span>
<span class="line"><span class="LineNumber">[17](#CA-6f94133aee876881b08e87046574b078b53285e0_17)</span> <span class="LineAnchor" id="CA-6f94133aee876881b08e87046574b078b53285e0_17"></span><span class="anchor" id="line-17-2"></span><span class="Comment"></span></span>
</pre>

</div>

</div>

<span class="anchor" id="line-80"></span>

Write the class implementation into .<span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span>

<span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span><span class="anchor" id="line-86"></span>

<pre><span class="anchor" id="line-1-6"></span>roscd python_bindings_tutorial/src
<span class="anchor" id="line-2-5"></span>touch add_two_ints.cpp
<span class="anchor" id="line-3-5"></span>rosed python_bindings_tutorial add_two_ints.cpp</pre>

<span class="anchor" id="line-87"></span>

The content of <tt class="backtick">src/add_two_ints.cpp</tt> will be:<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

<span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span><span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span><span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-1-7"></span>

<div class="highlight cpp">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff" lang="en"><span class="line"><span class="LineNumber">[1](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_1)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_1"></span><span class="anchor" id="line-1-8"></span><span class="Preprc">#</span><span class="Preprc">include <python_bindings_tutorial</span><span class="Preprc">/</span><span class="Preprc">add_two_ints.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[2](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_2)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_2"></span><span class="anchor" id="line-2-6"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_3)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_3"></span><span class="anchor" id="line-3-6"></span><span class="ResWord">using</span> <span class="ResWord">namespace</span> <span class="ID">python_bindings_tutorial</span>;</span>
<span class="line"><span class="LineNumber">[4](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_4)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_4"></span><span class="anchor" id="line-4-5"></span></span>
<span class="line"><span class="LineNumber">[5](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_5)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_5"></span><span class="anchor" id="line-5-5"></span><span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">AddTwoInts</span>::<span class="ID">add</span>(<span class="ResWord">const</span> <span class="ID">std_msgs</span>::<span class="ID">Int64</span>& <span class="ID">a</span>, <span class="ResWord">const</span> <span class="ID">std_msgs</span>::<span class="ID">Int64</span>& <span class="ID">b</span>)</span>
<span class="line"><span class="LineNumber">[6](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_6)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_6"></span><span class="anchor" id="line-6-5"></span>{</span>
<span class="line"><span class="LineNumber">[7](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_7)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_7"></span><span class="anchor" id="line-7-5"></span>  <span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">sum</span>;</span>
<span class="line"><span class="LineNumber">[8](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_8)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_8"></span><span class="anchor" id="line-8-3"></span>  <span class="ID">sum</span>.<span class="ID">data</span> = <span class="ID">a</span>.<span class="ID">data</span> + <span class="ID">b</span>.<span class="ID">data</span>;</span>
<span class="line"><span class="LineNumber">[9](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_9)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_9"></span><span class="anchor" id="line-9-3"></span>  <span class="ResWord">return</span> <span class="ID">sum</span>;</span>
<span class="line"><span class="LineNumber">[10](#CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_10)</span> <span class="LineAnchor" id="CA-3ac1133f8f0ddbe3d9f9a51fc2771329f6cd18ff_10"></span><span class="anchor" id="line-10-3"></span>}</span>
</pre>

</div>

</div>

<span class="anchor" id="line-101"></span>

### Binding, C++ part

<span class="anchor" id="line-102"></span>

The binding occurs through two wrapper classes, one in C++ and one in Python. The C++ wrapper translates input from serialized content to C++ message instances and output from C++ message instances into serialized content.<span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span>

<span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a" lang="en"><span class="line"><span class="LineNumber">[1](#CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_1)</span> <span class="LineAnchor" id="CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_1"></span><span class="ID">roscd</span> <span class="ID">python_bindings_tutorial</span><span class="SPChar">/</span><span class="ID">src</span></span>
<span class="line"><span class="LineNumber">[2](#CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_2)</span> <span class="LineAnchor" id="CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_2"></span><span class="ID">touch</span> <span class="ID">add_two_ints_wrapper</span><span class="SPChar">.</span><span class="ID">cpp</span></span>
<span class="line"><span class="LineNumber">[3](#CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_3)</span> <span class="LineAnchor" id="CA-0e063beacad7ea41aeed8e75c49661d7a2f4fa1a_3"></span><span class="ID">rosed</span> <span class="ID">python_bindings_tutorial</span> <span class="ID">add_two_ints_wrapper</span><span class="SPChar">.</span><span class="ID">cpp</span></span>
</pre>

</div>

<span class="anchor" id="line-109"></span>

The content of <tt class="backtick">src/add_two_ints_wrapper.cpp</tt> will be:<span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span>

<span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span><span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span><span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span><span class="anchor" id="line-148"></span><span class="anchor" id="line-149"></span><span class="anchor" id="line-150"></span><span class="anchor" id="line-151"></span><span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span><span class="anchor" id="line-154"></span><span class="anchor" id="line-155"></span><span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span><span class="anchor" id="line-158"></span><span class="anchor" id="line-159"></span><span class="anchor" id="line-160"></span><span class="anchor" id="line-161"></span><span class="anchor" id="line-162"></span><span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span><span class="anchor" id="line-165"></span><span class="anchor" id="line-166"></span><span class="anchor" id="line-167"></span><span class="anchor" id="line-168"></span><span class="anchor" id="line-169"></span><span class="anchor" id="line-170"></span><span class="anchor" id="line-171"></span><span class="anchor" id="line-172"></span><span class="anchor" id="line-173"></span><span class="anchor" id="line-174"></span><span class="anchor" id="line-175"></span><span class="anchor" id="line-176"></span><span class="anchor" id="line-177"></span><span class="anchor" id="line-1-9"></span>

<div class="highlight cpp">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff" lang="en"><span class="line"><span class="LineNumber">[1](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_1)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_1"></span><span class="anchor" id="line-1-10"></span><span class="Preprc">#</span><span class="Preprc">include <boost</span><span class="Preprc">/</span><span class="Preprc">python.hpp></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[2](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_2)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_2"></span><span class="anchor" id="line-2-7"></span><span class="Preprc"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_3)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_3"></span><span class="anchor" id="line-3-7"></span><span class="Preprc">#</span><span class="Preprc">include <string></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[4](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_4)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_4"></span><span class="anchor" id="line-4-6"></span><span class="Preprc"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[5](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_5)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_5"></span><span class="anchor" id="line-5-6"></span><span class="Preprc">#</span><span class="Preprc">include <ros</span><span class="Preprc">/</span><span class="Preprc">serialization.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[6](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_6)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_6"></span><span class="anchor" id="line-6-6"></span><span class="Preprc"></span><span class="Preprc">#</span><span class="Preprc">include <std_msgs</span><span class="Preprc">/</span><span class="Preprc">Int64.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[7](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_7)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_7"></span><span class="anchor" id="line-7-6"></span><span class="Preprc"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[8](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_8)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_8"></span><span class="anchor" id="line-8-4"></span><span class="Preprc">#</span><span class="Preprc">include <python_bindings_tutorial</span><span class="Preprc">/</span><span class="Preprc">add_two_ints.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[9](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_9)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_9"></span><span class="anchor" id="line-9-4"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[10](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_10)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_10"></span><span class="anchor" id="line-10-4"></span><span class="Comment">/* Read a ROS message from a serialized string.</span></span>
<span class="line"><span class="LineNumber">[11](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_11)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_11"></span><span class="anchor" id="line-11-3"></span> <span class="Comment">*/</span></span>
<span class="line"><span class="LineNumber">[12](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_12)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_12"></span><span class="anchor" id="line-12-3"></span><span class="ResWord">template</span> <<span class="ResWord">typename</span> <span class="ID">M</span>></span>
<span class="line"><span class="LineNumber">[13](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_13)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_13"></span><span class="anchor" id="line-13-3"></span><span class="ID">M</span> <span class="ID">from_python</span>(<span class="ResWord">const</span> <span class="ID">std</span>::<span class="ID">string</span> <span class="ID">str_msg</span>)</span>
<span class="line"><span class="LineNumber">[14](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_14)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_14"></span><span class="anchor" id="line-14-3"></span>{</span>
<span class="line"><span class="LineNumber">[15](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_15)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_15"></span><span class="anchor" id="line-15-3"></span>  <span class="ID">size_t</span> <span class="ID">serial_size</span> = <span class="ID">str_msg</span>.<span class="ID">size</span>();</span>
<span class="line"><span class="LineNumber">[16](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_16)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_16"></span><span class="anchor" id="line-16-3"></span>  <span class="ID">boost</span>::<span class="ID">shared_array</span><<span class="ID">uint8_t</span>> <span class="ID">buffer</span>(<span class="ResWord">new</span> <span class="ID">uint8_t</span>[<span class="ID">serial_size</span>]);</span>
<span class="line"><span class="LineNumber">[17](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_17)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_17"></span><span class="anchor" id="line-17-3"></span>  <span class="ResWord">for</span> (<span class="ID">size_t</span> <span class="ID">i</span> = <span class="Number">0</span>; <span class="ID">i</span> < <span class="ID">serial_size</span>; ++<span class="ID">i</span>)</span>
<span class="line"><span class="LineNumber">[18](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_18)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_18"></span><span class="anchor" id="line-18-2"></span>  {</span>
<span class="line"><span class="LineNumber">[19](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_19)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_19"></span><span class="anchor" id="line-19-1"></span>    <span class="ID">buffer</span>[<span class="ID">i</span>] = <span class="ID">str_msg</span>[<span class="ID">i</span>];</span>
<span class="line"><span class="LineNumber">[20](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_20)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_20"></span><span class="anchor" id="line-20-1"></span>  }</span>
<span class="line"><span class="LineNumber">[21](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_21)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_21"></span><span class="anchor" id="line-21-1"></span>  <span class="ID">ros</span>::<span class="ID">serialization</span>::<span class="ID">IStream</span> <span class="ID">stream</span>(<span class="ID">buffer</span>.<span class="ID">get</span>(), <span class="ID">serial_size</span>);</span>
<span class="line"><span class="LineNumber">[22](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_22)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_22"></span><span class="anchor" id="line-22-1"></span>  <span class="ID">M</span> <span class="ID">msg</span>;</span>
<span class="line"><span class="LineNumber">[23](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_23)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_23"></span><span class="anchor" id="line-23-1"></span>  <span class="ID">ros</span>::<span class="ID">serialization</span>::<span class="ID">Serializer</span><<span class="ID">M</span>>::<span class="ID">read</span>(<span class="ID">stream</span>, <span class="ID">msg</span>);</span>
<span class="line"><span class="LineNumber">[24](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_24)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_24"></span><span class="anchor" id="line-24-1"></span>  <span class="ResWord">return</span> <span class="ID">msg</span>;</span>
<span class="line"><span class="LineNumber">[25](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_25)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_25"></span><span class="anchor" id="line-25-1"></span>}</span>
<span class="line"><span class="LineNumber">[26](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_26)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_26"></span><span class="anchor" id="line-26-1"></span></span>
<span class="line"><span class="LineNumber">[27](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_27)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_27"></span><span class="anchor" id="line-27-1"></span><span class="Comment">/* Write a ROS message into a serialized string.</span></span>
<span class="line"><span class="LineNumber">[28](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_28)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_28"></span><span class="anchor" id="line-28-1"></span><span class="Comment">*/</span></span>
<span class="line"><span class="LineNumber">[29](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_29)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_29"></span><span class="anchor" id="line-29-1"></span><span class="ResWord">template</span> <<span class="ResWord">typename</span> <span class="ID">M</span>></span>
<span class="line"><span class="LineNumber">[30](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_30)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_30"></span><span class="anchor" id="line-30-1"></span><span class="ID">std</span>::<span class="ID">string</span> <span class="ID">to_python</span>(<span class="ResWord">const</span> <span class="ID">M</span>& <span class="ID">msg</span>)</span>
<span class="line"><span class="LineNumber">[31](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_31)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_31"></span><span class="anchor" id="line-31-1"></span>{</span>
<span class="line"><span class="LineNumber">[32](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_32)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_32"></span><span class="anchor" id="line-32-1"></span>  <span class="ID">size_t</span> <span class="ID">serial_size</span> = <span class="ID">ros</span>::<span class="ID">serialization</span>::<span class="ID">serializationLength</span>(<span class="ID">msg</span>);</span>
<span class="line"><span class="LineNumber">[33](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_33)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_33"></span><span class="anchor" id="line-33-1"></span>  <span class="ID">boost</span>::<span class="ID">shared_array</span><<span class="ID">uint8_t</span>> <span class="ID">buffer</span>(<span class="ResWord">new</span> <span class="ID">uint8_t</span>[<span class="ID">serial_size</span>]);</span>
<span class="line"><span class="LineNumber">[34](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_34)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_34"></span><span class="anchor" id="line-34-1"></span>  <span class="ID">ros</span>::<span class="ID">serialization</span>::<span class="ID">OStream</span> <span class="ID">stream</span>(<span class="ID">buffer</span>.<span class="ID">get</span>(), <span class="ID">serial_size</span>);</span>
<span class="line"><span class="LineNumber">[35](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_35)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_35"></span><span class="anchor" id="line-35-1"></span>  <span class="ID">ros</span>::<span class="ID">serialization</span>::<span class="ID">serialize</span>(<span class="ID">stream</span>, <span class="ID">msg</span>);</span>
<span class="line"><span class="LineNumber">[36](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_36)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_36"></span><span class="anchor" id="line-36-1"></span>  <span class="ID">std</span>::<span class="ID">string</span> <span class="ID">str_msg</span>;</span>
<span class="line"><span class="LineNumber">[37](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_37)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_37"></span><span class="anchor" id="line-37-1"></span>  <span class="ID">str_msg</span>.<span class="ID">reserve</span>(<span class="ID">serial_size</span>);</span>
<span class="line"><span class="LineNumber">[38](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_38)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_38"></span><span class="anchor" id="line-38-1"></span>  <span class="ResWord">for</span> (<span class="ID">size_t</span> <span class="ID">i</span> = <span class="Number">0</span>; <span class="ID">i</span> < <span class="ID">serial_size</span>; ++<span class="ID">i</span>)</span>
<span class="line"><span class="LineNumber">[39](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_39)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_39"></span><span class="anchor" id="line-39-1"></span>  {</span>
<span class="line"><span class="LineNumber">[40](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_40)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_40"></span><span class="anchor" id="line-40-1"></span>    <span class="ID">str_msg</span>.<span class="ID">push_back</span>(<span class="ID">buffer</span>[<span class="ID">i</span>]);</span>
<span class="line"><span class="LineNumber">[41](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_41)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_41"></span><span class="anchor" id="line-41-1"></span>  }</span>
<span class="line"><span class="LineNumber">[42](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_42)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_42"></span><span class="anchor" id="line-42-1"></span>  <span class="ResWord">return</span> <span class="ID">str_msg</span>;</span>
<span class="line"><span class="LineNumber">[43](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_43)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_43"></span><span class="anchor" id="line-43-1"></span>}</span>
<span class="line"><span class="LineNumber">[44](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_44)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_44"></span><span class="anchor" id="line-44-1"></span></span>
<span class="line"><span class="LineNumber">[45](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_45)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_45"></span><span class="anchor" id="line-45-1"></span><span class="ResWord">class</span> <span class="ID">AddTwoIntsWrapper</span> : <span class="ResWord">public</span> <span class="ID">python_bindings_tutorial</span>::<span class="ID">AddTwoInts</span></span>
<span class="line"><span class="LineNumber">[46](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_46)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_46"></span><span class="anchor" id="line-46-1"></span>{</span>
<span class="line"><span class="LineNumber">[47](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_47)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_47"></span><span class="anchor" id="line-47-1"></span>  <span class="ResWord">public</span>:</span>
<span class="line"><span class="LineNumber">[48](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_48)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_48"></span><span class="anchor" id="line-48-1"></span>    <span class="ID">AddTwoIntsWrapper</span>() : <span class="ID">AddTwoInts</span>() {}</span>
<span class="line"><span class="LineNumber">[49](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_49)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_49"></span><span class="anchor" id="line-49-1"></span></span>
<span class="line"><span class="LineNumber">[50](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_50)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_50"></span><span class="anchor" id="line-50-1"></span>    <span class="ID">std</span>::<span class="ID">string</span> <span class="ID">add</span>(<span class="ResWord">const</span> <span class="ID">std</span>::<span class="ID">string</span>& <span class="ID">str_a</span>, <span class="ResWord">const</span> <span class="ID">std</span>::<span class="ID">string</span>& <span class="ID">str_b</span>)</span>
<span class="line"><span class="LineNumber">[51](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_51)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_51"></span><span class="anchor" id="line-51-1"></span>    {</span>
<span class="line"><span class="LineNumber">[52](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_52)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_52"></span><span class="anchor" id="line-52-1"></span>      <span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">a</span> = <span class="ID">from_python</span><<span class="ID">std_msgs</span>::<span class="ID">Int64</span>>(<span class="ID">str_a</span>);</span>
<span class="line"><span class="LineNumber">[53](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_53)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_53"></span><span class="anchor" id="line-53-1"></span>      <span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">b</span> = <span class="ID">from_python</span><<span class="ID">std_msgs</span>::<span class="ID">Int64</span>>(<span class="ID">str_b</span>);</span>
<span class="line"><span class="LineNumber">[54](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_54)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_54"></span><span class="anchor" id="line-54-1"></span>      <span class="ID">std_msgs</span>::<span class="ID">Int64</span> <span class="ID">sum</span> = <span class="ID">AddTwoInts</span>::<span class="ID">add</span>(<span class="ID">a</span>, <span class="ID">b</span>);</span>
<span class="line"><span class="LineNumber">[55](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_55)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_55"></span><span class="anchor" id="line-55-1"></span></span>
<span class="line"><span class="LineNumber">[56](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_56)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_56"></span><span class="anchor" id="line-56-1"></span>      <span class="ResWord">return</span> <span class="ID">to_python</span>(<span class="ID">sum</span>);</span>
<span class="line"><span class="LineNumber">[57](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_57)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_57"></span><span class="anchor" id="line-57-1"></span>    }</span>
<span class="line"><span class="LineNumber">[58](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_58)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_58"></span><span class="anchor" id="line-58-1"></span>};</span>
<span class="line"><span class="LineNumber">[59](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_59)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_59"></span><span class="anchor" id="line-59-1"></span></span>
<span class="line"><span class="LineNumber">[60](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_60)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_60"></span><span class="anchor" id="line-60-1"></span><span class="ID">BOOST_PYTHON_MODULE</span>(<span class="ID">_add_two_ints_wrapper_cpp</span>)</span>
<span class="line"><span class="LineNumber">[61](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_61)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_61"></span><span class="anchor" id="line-61-1"></span>{</span>
<span class="line"><span class="LineNumber">[62](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_62)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_62"></span><span class="anchor" id="line-62-1"></span>  <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">class_</span><<span class="ID">AddTwoIntsWrapper</span>>(<span class="String">"</span><span class="String">AddTwoIntsWrapper</span><span class="String">"</span>, <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">init</span><>())</span>
<span class="line"><span class="LineNumber">[63](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_63)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_63"></span><span class="anchor" id="line-63-1"></span>    .<span class="ID">def</span>(<span class="String">"</span><span class="String">add</span><span class="String">"</span>, &<span class="ID">AddTwoIntsWrapper</span>::<span class="ID">add</span>)</span>
<span class="line"><span class="LineNumber">[64](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_64)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_64"></span><span class="anchor" id="line-64-1"></span>    ;</span>
<span class="line"><span class="LineNumber">[65](#CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_65)</span> <span class="LineAnchor" id="CA-f80823c1a504b34d25b1cfddb17468cbc3d0fbff_65"></span><span class="anchor" id="line-65-1"></span>}</span>
</pre>

</div>

</div>

<span class="anchor" id="line-178"></span>

The line Error: No code_block found creates a Python module in the form of a dynamic library. The name of the module will have to be the name of the exported library in <tt class="backtick">CMakeLists.txt</tt>.<span class="anchor" id="line-179"></span><span class="anchor" id="line-180"></span>

### Binding, Python part

<span class="anchor" id="line-181"></span>

The Python wrapper translates input from Python message instances into serialized content and output from serialized content to Python message instances. The translation from Python serialized content (<tt class="backtick">str</tt>) into C++ serialized content (<tt class="backtick">std::string</tt>) is built in the Boost Python library.<span class="anchor" id="line-182"></span><span class="anchor" id="line-183"></span>

<span class="anchor" id="line-184"></span><span class="anchor" id="line-185"></span><span class="anchor" id="line-186"></span><span class="anchor" id="line-187"></span><span class="anchor" id="line-188"></span><span class="anchor" id="line-189"></span>

<pre><span class="anchor" id="line-1-11"></span>roscd python_bindings_tutorial/src
<span class="anchor" id="line-2-8"></span>mkdir python_bindings_tutorial
<span class="anchor" id="line-3-8"></span>roscd python_bindings_tutorial/src/python_bindings_tutorial
<span class="anchor" id="line-4-7"></span>touch _add_two_ints_wrapper_py.py
<span class="anchor" id="line-5-7"></span>rosed python_bindings_tutorial _add_two_ints_wrapper_py.py</pre>

<span class="anchor" id="line-190"></span>

The content of <tt class="backtick">src/python_bindings_tutorial/_add_two_ints_wrapper_py.py</tt> will be<span class="anchor" id="line-191"></span><span class="anchor" id="line-192"></span>

<span class="anchor" id="line-193"></span><span class="anchor" id="line-194"></span><span class="anchor" id="line-195"></span><span class="anchor" id="line-196"></span><span class="anchor" id="line-197"></span><span class="anchor" id="line-198"></span><span class="anchor" id="line-199"></span><span class="anchor" id="line-200"></span><span class="anchor" id="line-201"></span><span class="anchor" id="line-202"></span><span class="anchor" id="line-203"></span><span class="anchor" id="line-204"></span><span class="anchor" id="line-205"></span><span class="anchor" id="line-206"></span><span class="anchor" id="line-207"></span><span class="anchor" id="line-208"></span><span class="anchor" id="line-209"></span><span class="anchor" id="line-210"></span><span class="anchor" id="line-211"></span><span class="anchor" id="line-212"></span><span class="anchor" id="line-213"></span><span class="anchor" id="line-214"></span><span class="anchor" id="line-215"></span><span class="anchor" id="line-216"></span><span class="anchor" id="line-217"></span><span class="anchor" id="line-218"></span><span class="anchor" id="line-219"></span><span class="anchor" id="line-220"></span><span class="anchor" id="line-221"></span><span class="anchor" id="line-222"></span><span class="anchor" id="line-223"></span><span class="anchor" id="line-224"></span><span class="anchor" id="line-225"></span><span class="anchor" id="line-226"></span><span class="anchor" id="line-227"></span><span class="anchor" id="line-228"></span><span class="anchor" id="line-229"></span><span class="anchor" id="line-230"></span><span class="anchor" id="line-231"></span><span class="anchor" id="line-232"></span><span class="anchor" id="line-233"></span><span class="anchor" id="line-234"></span><span class="anchor" id="line-235"></span><span class="anchor" id="line-236"></span><span class="anchor" id="line-237"></span><span class="anchor" id="line-238"></span><span class="anchor" id="line-239"></span><span class="anchor" id="line-240"></span><span class="anchor" id="line-241"></span><span class="anchor" id="line-242"></span><span class="anchor" id="line-243"></span><span class="anchor" id="line-244"></span><span class="anchor" id="line-245"></span><span class="anchor" id="line-1-12"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-b40e1737bd854731702e99e0a9c37a7984f06e3f\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f" lang="en"><span class="line"><span class="LineNumber">[1](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_1)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_1"></span><span class="anchor" id="line-1-13"></span><span class="ResWord">from</span> <span class="ID">StringIO</span> <span class="ResWord">import</span> <span class="ID">StringIO</span></span>
<span class="line"><span class="LineNumber">[2](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_2)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_2"></span><span class="anchor" id="line-2-9"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_3)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_3"></span><span class="anchor" id="line-3-9"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[4](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_4)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_4"></span><span class="anchor" id="line-4-8"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">Int64</span></span>
<span class="line"><span class="LineNumber">[5](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_5)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_5"></span><span class="anchor" id="line-5-8"></span></span>
<span class="line"><span class="LineNumber">[6](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_6)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_6"></span><span class="anchor" id="line-6-7"></span><span class="ResWord">from</span> <span class="ID">python_bindings_tutorial._add_two_ints_wrapper_cpp</span> <span class="ResWord">import</span> <span class="ID">AddTwoIntsWrapper</span></span>
<span class="line"><span class="LineNumber">[7](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_7)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_7"></span><span class="anchor" id="line-7-7"></span></span>
<span class="line"><span class="LineNumber">[8](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_8)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_8"></span><span class="anchor" id="line-8-5"></span></span>
<span class="line"><span class="LineNumber">[9](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_9)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_9"></span><span class="anchor" id="line-9-5"></span><span class="ResWord">class</span> <span class="ID">AddTwoInts</span>(<span class="ResWord">object</span>):</span>
<span class="line"><span class="LineNumber">[10](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_10)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_10"></span><span class="anchor" id="line-10-5"></span>    <span class="ResWord">def</span> <span class="ID">__init__</span>(<span class="ResWord">self</span>):</span>
<span class="line"><span class="LineNumber">[11](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_11)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_11"></span><span class="anchor" id="line-11-4"></span>        <span class="ResWord">self</span>.<span class="ID">_add_two_ints</span> = <span class="ID">AddTwoIntsWrapper</span>()</span>
<span class="line"><span class="LineNumber">[12](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_12)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_12"></span><span class="anchor" id="line-12-4"></span></span>
<span class="line"><span class="LineNumber">[13](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_13)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_13"></span><span class="anchor" id="line-13-4"></span>    <span class="ResWord">def</span> <span class="ID">_to_cpp</span>(<span class="ResWord">self</span>, <span class="ID">msg</span>):</span>
<span class="line"><span class="LineNumber">[14](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_14)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_14"></span><span class="anchor" id="line-14-4"></span>        <span class="String">"""Return a serialized string from a ROS message</span></span>
<span class="line"><span class="LineNumber">[15](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_15)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_15"></span><span class="anchor" id="line-15-4"></span><span class="String"></span></span>
<span class="line"><span class="LineNumber">[16](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_16)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_16"></span><span class="anchor" id="line-16-4"></span> <span class="String">Parameters</span></span>
<span class="line"><span class="LineNumber">[17](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_17)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_17"></span><span class="anchor" id="line-17-4"></span> <span class="String">----------</span></span>
<span class="line"><span class="LineNumber">[18](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_18)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_18"></span><span class="anchor" id="line-18-3"></span> <span class="String">- msg: a ROS message instance.</span></span>
<span class="line"><span class="LineNumber">[19](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_19)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_19"></span><span class="anchor" id="line-19-2"></span> <span class="String">"""</span></span>
<span class="line"><span class="LineNumber">[20](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_20)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_20"></span><span class="anchor" id="line-20-2"></span>        <span class="ID">buf</span> = <span class="ID">StringIO</span>()</span>
<span class="line"><span class="LineNumber">[21](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_21)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_21"></span><span class="anchor" id="line-21-2"></span>        <span class="ID">msg</span>.<span class="ID">serialize</span>(<span class="ID">buf</span>)</span>
<span class="line"><span class="LineNumber">[22](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_22)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_22"></span><span class="anchor" id="line-22-2"></span>        <span class="ResWord">return</span> <span class="ID">buf</span>.<span class="ID">getvalue</span>()</span>
<span class="line"><span class="LineNumber">[23](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_23)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_23"></span><span class="anchor" id="line-23-2"></span></span>
<span class="line"><span class="LineNumber">[24](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_24)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_24"></span><span class="anchor" id="line-24-2"></span>    <span class="ResWord">def</span> <span class="ID">_from_cpp</span>(<span class="ResWord">self</span>, <span class="ID">str_msg</span>, <span class="ID">cls</span>):</span>
<span class="line"><span class="LineNumber">[25](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_25)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_25"></span><span class="anchor" id="line-25-2"></span>        <span class="String">"""Return a ROS message from a serialized string</span></span>
<span class="line"><span class="LineNumber">[26](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_26)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_26"></span><span class="anchor" id="line-26-2"></span><span class="String"></span></span>
<span class="line"><span class="LineNumber">[27](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_27)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_27"></span><span class="anchor" id="line-27-2"></span> <span class="String">Parameters</span></span>
<span class="line"><span class="LineNumber">[28](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_28)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_28"></span><span class="anchor" id="line-28-2"></span> <span class="String">----------</span></span>
<span class="line"><span class="LineNumber">[29](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_29)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_29"></span><span class="anchor" id="line-29-2"></span> <span class="String">- str_msg: str, serialized message</span></span>
<span class="line"><span class="LineNumber">[30](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_30)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_30"></span><span class="anchor" id="line-30-2"></span> <span class="String">- cls: ROS message class, e.g. sensor_msgs.msg.LaserScan.</span></span>
<span class="line"><span class="LineNumber">[31](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_31)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_31"></span><span class="anchor" id="line-31-2"></span> <span class="String">"""</span></span>
<span class="line"><span class="LineNumber">[32](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_32)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_32"></span><span class="anchor" id="line-32-2"></span>        <span class="ID">msg</span> = <span class="ID">cls</span>()</span>
<span class="line"><span class="LineNumber">[33](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_33)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_33"></span><span class="anchor" id="line-33-2"></span>        <span class="ResWord">return</span> <span class="ID">msg</span>.<span class="ID">deserialize</span>(<span class="ID">str_msg</span>)</span>
<span class="line"><span class="LineNumber">[34](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_34)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_34"></span><span class="anchor" id="line-34-2"></span></span>
<span class="line"><span class="LineNumber">[35](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_35)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_35"></span><span class="anchor" id="line-35-2"></span>    <span class="ResWord">def</span> <span class="ID">add</span>(<span class="ResWord">self</span>, <span class="ID">a</span>, <span class="ID">b</span>):</span>
<span class="line"><span class="LineNumber">[36](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_36)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_36"></span><span class="anchor" id="line-36-2"></span>        <span class="String">"""Add two std_mgs/Int64 messages</span></span>
<span class="line"><span class="LineNumber">[37](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_37)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_37"></span><span class="anchor" id="line-37-2"></span><span class="String"></span></span>
<span class="line"><span class="LineNumber">[38](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_38)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_38"></span><span class="anchor" id="line-38-2"></span> <span class="String">Return a std_msgs/Int64 instance.</span></span>
<span class="line"><span class="LineNumber">[39](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_39)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_39"></span><span class="anchor" id="line-39-2"></span><span class="String"></span></span>
<span class="line"><span class="LineNumber">[40](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_40)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_40"></span><span class="anchor" id="line-40-2"></span> <span class="String">Parameters</span></span>
<span class="line"><span class="LineNumber">[41](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_41)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_41"></span><span class="anchor" id="line-41-2"></span> <span class="String">----------</span></span>
<span class="line"><span class="LineNumber">[42](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_42)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_42"></span><span class="anchor" id="line-42-2"></span> <span class="String">- a: a std_msgs/Int64 instance.</span></span>
<span class="line"><span class="LineNumber">[43](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_43)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_43"></span><span class="anchor" id="line-43-2"></span> <span class="String">- b: a std_msgs/Int64 instance.</span></span>
<span class="line"><span class="LineNumber">[44](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_44)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_44"></span><span class="anchor" id="line-44-2"></span> <span class="String">"""</span></span>
<span class="line"><span class="LineNumber">[45](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_45)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_45"></span><span class="anchor" id="line-45-2"></span>        <span class="ResWord">if</span> <span class="ResWord">not</span> <span class="ResWord">isinstance</span>(<span class="ID">a</span>, <span class="ID">Int64</span>):</span>
<span class="line"><span class="LineNumber">[46](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_46)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_46"></span><span class="anchor" id="line-46-2"></span>            <span class="ID">rospy</span>.<span class="ID">ROSException</span>(<span class="String">'</span><span class="String">Argument 1 is not a std_msgs/Int64</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[47](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_47)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_47"></span><span class="anchor" id="line-47-2"></span>        <span class="ResWord">if</span> <span class="ResWord">not</span> <span class="ResWord">isinstance</span>(<span class="ID">b</span>, <span class="ID">Int64</span>):</span>
<span class="line"><span class="LineNumber">[48](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_48)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_48"></span><span class="anchor" id="line-48-2"></span>            <span class="ID">rospy</span>.<span class="ID">ROSException</span>(<span class="String">'</span><span class="String">Argument 2 is not a std_msgs/Int64</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[49](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_49)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_49"></span><span class="anchor" id="line-49-2"></span>        <span class="ID">str_a</span> = <span class="ResWord">self</span>.<span class="ID">_to_cpp</span>(<span class="ID">a</span>)</span>
<span class="line"><span class="LineNumber">[50](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_50)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_50"></span><span class="anchor" id="line-50-2"></span>        <span class="ID">str_b</span> = <span class="ResWord">self</span>.<span class="ID">_to_cpp</span>(<span class="ID">b</span>)</span>
<span class="line"><span class="LineNumber">[51](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_51)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_51"></span><span class="anchor" id="line-51-2"></span>        <span class="ID">str_sum</span> = <span class="ResWord">self</span>.<span class="ID">_add_two_ints</span>.<span class="ID">add</span>(<span class="ID">str_a</span>, <span class="ID">str_b</span>)</span>
<span class="line"><span class="LineNumber">[52](#CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_52)</span> <span class="LineAnchor" id="CA-b40e1737bd854731702e99e0a9c37a7984f06e3f_52"></span><span class="anchor" id="line-52-2"></span>        <span class="ResWord">return</span> <span class="ResWord">self</span>.<span class="ID">_from_cpp</span>(<span class="ID">str_sum</span>, <span class="ID">Int64</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="line-246"></span>

In order to be able to import the class as <tt class="backtick">python_bindings_tutorial.AddTwoInts</tt>, we import the symbols in <tt class="backtick">__init__.py</tt>. First, we create the file:<span class="anchor" id="line-247"></span><span class="anchor" id="line-248"></span>

<span class="anchor" id="line-249"></span><span class="anchor" id="line-250"></span><span class="anchor" id="line-251"></span><span class="anchor" id="line-252"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-77e18c98840b944466d9264e88b96de228128f89\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-77e18c98840b944466d9264e88b96de228128f89" lang="en"><span class="line"><span class="LineNumber">[1](#CA-77e18c98840b944466d9264e88b96de228128f89_1)</span> <span class="LineAnchor" id="CA-77e18c98840b944466d9264e88b96de228128f89_1"></span><span class="ID">roscd</span> <span class="ID">python_bindings_tutorial</span><span class="SPChar">/</span><span class="ID">src</span><span class="SPChar">/</span><span class="ID">python_bindings_tutorial</span></span>
<span class="line"><span class="LineNumber">[2](#CA-77e18c98840b944466d9264e88b96de228128f89_2)</span> <span class="LineAnchor" id="CA-77e18c98840b944466d9264e88b96de228128f89_2"></span><span class="ID">touch</span> <span class="ID">__init__</span><span class="SPChar">.</span><span class="ID">py</span></span>
<span class="line"><span class="LineNumber">[3](#CA-77e18c98840b944466d9264e88b96de228128f89_3)</span> <span class="LineAnchor" id="CA-77e18c98840b944466d9264e88b96de228128f89_3"></span><span class="ID">rosed</span> <span class="ID">python_bindings_tutorial</span> <span class="ID">__init__</span><span class="SPChar">.</span><span class="ID">py</span></span>
</pre>

</div>

<span class="anchor" id="line-253"></span>

The content of <tt class="backtick">src/python_bindings_tutorial/__init__.py</tt> will be:<span class="anchor" id="line-254"></span><span class="anchor" id="line-255"></span>

<span class="anchor" id="line-256"></span><span class="anchor" id="line-257"></span><span class="anchor" id="line-1-14"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-98ea88fd4572e2d6b87c81ddd52b753920d9359f\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-98ea88fd4572e2d6b87c81ddd52b753920d9359f" lang="en"><span class="line"><span class="LineNumber">[1](#CA-98ea88fd4572e2d6b87c81ddd52b753920d9359f_1)</span> <span class="LineAnchor" id="CA-98ea88fd4572e2d6b87c81ddd52b753920d9359f_1"></span><span class="anchor" id="line-1-15"></span><span class="ResWord">from</span> <span class="ID">python_bindings_tutorial._add_two_ints_wrapper_py</span> <span class="ResWord">import</span> <span class="ID">AddTwoInts</span></span>
</pre>

</div>

</div>

<span class="anchor" id="line-258"></span>

### Glueing everything together

<span class="anchor" id="line-259"></span>

Edit the <tt class="backtick">CMakeLists.txt</tt> (<tt class="backtick">rosed python_bindings_tutorial CmakeLists.txt</tt>) like this:<span class="anchor" id="line-260"></span><span class="anchor" id="line-261"></span>

<span class="anchor" id="line-262"></span><span class="anchor" id="line-263"></span><span class="anchor" id="line-264"></span><span class="anchor" id="line-265"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-16"></span>

<span class="anchor" id="line-2-10"></span><span class="anchor" id="line-3-10"></span>

<pre><span class="anchor" id="line-1-17"></span>Adapt CMakeLists.txt from the catkin version of this page.</pre>

</div>

<span class="anchor" id="line-266"></span>

<span class="anchor" id="line-267"></span><span class="anchor" id="line-268"></span><span class="anchor" id="line-269"></span><span class="anchor" id="line-270"></span><span class="anchor" id="line-271"></span><span class="anchor" id="line-272"></span><span class="anchor" id="line-273"></span><span class="anchor" id="line-274"></span><span class="anchor" id="line-275"></span><span class="anchor" id="line-276"></span><span class="anchor" id="line-277"></span><span class="anchor" id="line-278"></span><span class="anchor" id="line-279"></span><span class="anchor" id="line-280"></span><span class="anchor" id="line-281"></span><span class="anchor" id="line-282"></span><span class="anchor" id="line-283"></span><span class="anchor" id="line-284"></span><span class="anchor" id="line-285"></span><span class="anchor" id="line-286"></span><span class="anchor" id="line-287"></span><span class="anchor" id="line-288"></span><span class="anchor" id="line-289"></span><span class="anchor" id="line-290"></span><span class="anchor" id="line-291"></span><span class="anchor" id="line-292"></span><span class="anchor" id="line-293"></span><span class="anchor" id="line-294"></span><span class="anchor" id="line-295"></span><span class="anchor" id="line-296"></span><span class="anchor" id="line-297"></span><span class="anchor" id="line-298"></span><span class="anchor" id="line-299"></span><span class="anchor" id="line-300"></span><span class="anchor" id="line-301"></span><span class="anchor" id="line-302"></span><span class="anchor" id="line-303"></span><span class="anchor" id="line-304"></span><span class="anchor" id="line-305"></span><span class="anchor" id="line-306"></span><span class="anchor" id="line-307"></span><span class="anchor" id="line-308"></span><span class="anchor" id="line-309"></span><span class="anchor" id="line-310"></span><span class="anchor" id="line-311"></span><span class="anchor" id="line-312"></span><span class="anchor" id="line-313"></span><span class="anchor" id="line-314"></span><span class="anchor" id="line-315"></span><span class="anchor" id="line-316"></span><span class="anchor" id="line-317"></span><span class="anchor" id="line-318"></span><span class="anchor" id="line-319"></span><span class="anchor" id="line-320"></span><span class="anchor" id="line-321"></span><span class="anchor" id="line-322"></span><span class="anchor" id="line-323"></span><span class="anchor" id="line-324"></span><span class="anchor" id="line-325"></span><span class="anchor" id="line-326"></span><span class="anchor" id="line-327"></span><span class="anchor" id="line-328"></span><span class="anchor" id="line-329"></span><span class="anchor" id="line-330"></span><span class="anchor" id="line-331"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-18"></span>

<span class="anchor" id="line-2-11"></span><span class="anchor" id="line-3-11"></span><span class="anchor" id="line-4-9"></span><span class="anchor" id="line-5-9"></span><span class="anchor" id="line-6-8"></span><span class="anchor" id="line-7-8"></span><span class="anchor" id="line-8-6"></span><span class="anchor" id="line-9-6"></span><span class="anchor" id="line-10-6"></span><span class="anchor" id="line-11-5"></span><span class="anchor" id="line-12-5"></span><span class="anchor" id="line-13-5"></span><span class="anchor" id="line-14-5"></span><span class="anchor" id="line-15-5"></span><span class="anchor" id="line-16-5"></span><span class="anchor" id="line-17-5"></span><span class="anchor" id="line-18-4"></span><span class="anchor" id="line-19-3"></span><span class="anchor" id="line-20-3"></span><span class="anchor" id="line-21-3"></span><span class="anchor" id="line-22-3"></span><span class="anchor" id="line-23-3"></span><span class="anchor" id="line-24-3"></span><span class="anchor" id="line-25-3"></span><span class="anchor" id="line-26-3"></span><span class="anchor" id="line-27-3"></span><span class="anchor" id="line-28-3"></span><span class="anchor" id="line-29-3"></span><span class="anchor" id="line-30-3"></span><span class="anchor" id="line-31-3"></span><span class="anchor" id="line-32-3"></span><span class="anchor" id="line-33-3"></span><span class="anchor" id="line-34-3"></span><span class="anchor" id="line-35-3"></span><span class="anchor" id="line-36-3"></span><span class="anchor" id="line-37-3"></span><span class="anchor" id="line-38-3"></span><span class="anchor" id="line-39-3"></span><span class="anchor" id="line-40-3"></span><span class="anchor" id="line-41-3"></span><span class="anchor" id="line-42-3"></span><span class="anchor" id="line-43-3"></span><span class="anchor" id="line-44-3"></span><span class="anchor" id="line-45-3"></span><span class="anchor" id="line-46-3"></span><span class="anchor" id="line-47-3"></span><span class="anchor" id="line-48-3"></span><span class="anchor" id="line-49-3"></span><span class="anchor" id="line-50-3"></span><span class="anchor" id="line-51-3"></span><span class="anchor" id="line-52-3"></span><span class="anchor" id="line-53-2"></span><span class="anchor" id="line-54-2"></span><span class="anchor" id="line-55-2"></span><span class="anchor" id="line-56-2"></span><span class="anchor" id="line-57-2"></span>

<pre><span class="anchor" id="line-1-19"></span>cmake_minimum_required(VERSION 2.8.3)
<span class="anchor" id="line-2-12"></span>project(python_bindings_tutorial)
<span class="anchor" id="line-3-12"></span>
<span class="anchor" id="line-4-10"></span>find_package(catkin REQUIRED COMPONENTS
<span class="anchor" id="line-5-10"></span>  roscpp
<span class="anchor" id="line-6-9"></span>  roscpp_serialization
<span class="anchor" id="line-7-9"></span>  std_msgs
<span class="anchor" id="line-8-7"></span>)
<span class="anchor" id="line-9-7"></span>
<span class="anchor" id="line-10-7"></span>## Both Boost.python and Python libs are required.
<span class="anchor" id="line-11-6"></span>find_package(Boost REQUIRED COMPONENTS python)
<span class="anchor" id="line-12-6"></span>find_package(PythonLibs 2.7 REQUIRED)
<span class="anchor" id="line-13-6"></span>
<span class="anchor" id="line-14-6"></span>
<span class="anchor" id="line-15-6"></span>## Uncomment this if the package has a setup.py. This macro ensures
<span class="anchor" id="line-16-6"></span>## modules and global scripts declared therein get installed
<span class="anchor" id="line-17-6"></span>## See http://ros.org/doc/api/catkin/html/user_guide/setup_dot_py.html
<span class="anchor" id="line-18-5"></span>catkin_python_setup()
<span class="anchor" id="line-19-4"></span>
<span class="anchor" id="line-20-4"></span>###################################
<span class="anchor" id="line-21-4"></span>## catkin specific configuration ##
<span class="anchor" id="line-22-4"></span>###################################
<span class="anchor" id="line-23-4"></span>catkin_package(
<span class="anchor" id="line-24-4"></span>        INCLUDE_DIRS include
<span class="anchor" id="line-25-4"></span>        LIBRARIES add_two_ints _add_two_ints_wrapper_cpp
<span class="anchor" id="line-26-4"></span>        CATKIN_DEPENDS roscpp
<span class="anchor" id="line-27-4"></span>        #  DEPENDS system_lib
<span class="anchor" id="line-28-4"></span>)
<span class="anchor" id="line-29-4"></span>
<span class="anchor" id="line-30-4"></span>###########
<span class="anchor" id="line-31-4"></span>## Build ##
<span class="anchor" id="line-32-4"></span>###########
<span class="anchor" id="line-33-4"></span>
<span class="anchor" id="line-34-4"></span># include Boost and Python.
<span class="anchor" id="line-35-4"></span>include_directories(
<span class="anchor" id="line-36-4"></span>        include
<span class="anchor" id="line-37-4"></span>        ${catkin_INCLUDE_DIRS}
<span class="anchor" id="line-38-4"></span>        ${Boost_INCLUDE_DIRS}
<span class="anchor" id="line-39-4"></span>        ${PYTHON_INCLUDE_DIRS}
<span class="anchor" id="line-40-4"></span>        )
<span class="anchor" id="line-41-4"></span>
<span class="anchor" id="line-42-4"></span>## Declare a cpp library
<span class="anchor" id="line-43-4"></span>add_library(add_two_ints src/add_two_ints.cpp)
<span class="anchor" id="line-44-4"></span>add_library(_add_two_ints_wrapper_cpp src/add_two_ints_wrapper.cpp)
<span class="anchor" id="line-45-4"></span>
<span class="anchor" id="line-46-4"></span>## Specify libraries to link a library or executable target against
<span class="anchor" id="line-47-4"></span>target_link_libraries(add_two_ints ${catkin_LIBRARIES})
<span class="anchor" id="line-48-4"></span>target_link_libraries(_add_two_ints_wrapper_cpp add_two_ints ${catkin_LIBRARIES} ${Boost_LIBRARIES})
<span class="anchor" id="line-49-4"></span>
<span class="anchor" id="line-50-4"></span># Don't prepend wrapper library name with lib and add to Python libs.
<span class="anchor" id="line-51-4"></span>set_target_properties(_add_two_ints_wrapper_cpp PROPERTIES
<span class="anchor" id="line-52-4"></span>        PREFIX ""
<span class="anchor" id="line-53-3"></span>        LIBRARY_OUTPUT_DIRECTORY ${CATKIN_DEVEL_PREFIX}/${CATKIN_PACKAGE_PYTHON_DESTINATION}
<span class="anchor" id="line-54-3"></span>        )</pre>

<span class="anchor" id="line-58-2"></span><span class="anchor" id="line-59-2"></span>

The c++ wrapper library should be have the same name as the Python module. If the target name needs to be different for a reason, the library name can be specified with <span class="anchor" id="line-60-2"></span><tt class="backtick">set_target_properties(_add_two_ints_wrapper_cpp PROPERTIES OUTPUT_NAME correct_library_name)</tt>.<span class="anchor" id="line-61-2"></span><span class="anchor" id="line-62-2"></span>

The line<span class="anchor" id="line-63-2"></span><span class="anchor" id="line-1-20"></span><span class="anchor" id="line-2-13"></span><span class="anchor" id="line-3-13"></span><span class="anchor" id="line-4-11"></span>

<pre><span class="anchor" id="line-1-21"></span>catkin_python_setup()</pre>

<span class="anchor" id="line-5-11"></span>

<span class="anchor" id="line-64-2"></span>is used to export the Python module and is associated with the file <tt class="backtick">setup.py</tt>

</div>

<span class="anchor" id="line-332"></span>

<span class="anchor" id="line-333"></span><span class="anchor" id="line-334"></span><span class="anchor" id="line-335"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9" lang="en"><span class="line"><span class="LineNumber">[1](#CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9_1)</span> <span class="LineAnchor" id="CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9_1"></span><span class="ID">roscd</span> <span class="ID">python_bindings_tutorial</span></span>
<span class="line"><span class="LineNumber">[2](#CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9_2)</span> <span class="LineAnchor" id="CA-742b543d8fd39fbf2b3f5d85e5ca6f0bcd091ec9_2"></span><span class="ID">touch</span> <span class="ID">setup</span><span class="SPChar">.</span><span class="ID">py</span></span>
</pre>

</div>

<span class="anchor" id="line-336"></span>

The content of <tt class="backtick">setup.py</tt> will be:<span class="anchor" id="line-337"></span><span class="anchor" id="line-338"></span>

<span class="anchor" id="line-339"></span><span class="anchor" id="line-340"></span><span class="anchor" id="line-341"></span><span class="anchor" id="line-342"></span><span class="anchor" id="line-343"></span><span class="anchor" id="line-344"></span><span class="anchor" id="line-345"></span><span class="anchor" id="line-346"></span><span class="anchor" id="line-347"></span><span class="anchor" id="line-348"></span><span class="anchor" id="line-349"></span><span class="anchor" id="line-350"></span><span class="anchor" id="line-1-22"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-db6c28650931aa126ee4e8b526d34c847a3bb63e\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e" lang="en"><span class="line"><span class="LineNumber">[1](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_1)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_1"></span><span class="anchor" id="line-1-23"></span><span class="Comment"># ! DO NOT MANUALLY INVOKE THIS setup.py, USE CATKIN INSTEAD</span></span>
<span class="line"><span class="LineNumber">[2](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_2)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_2"></span><span class="anchor" id="line-2-14"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_3)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_3"></span><span class="anchor" id="line-3-14"></span><span class="ResWord">from</span> <span class="ID">distutils.core</span> <span class="ResWord">import</span> <span class="ID">setup</span></span>
<span class="line"><span class="LineNumber">[4](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_4)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_4"></span><span class="anchor" id="line-4-12"></span><span class="ResWord">from</span> <span class="ID">catkin_pkg.python_setup</span> <span class="ResWord">import</span> <span class="ID">generate_distutils_setup</span></span>
<span class="line"><span class="LineNumber">[5](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_5)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_5"></span><span class="anchor" id="line-5-12"></span></span>
<span class="line"><span class="LineNumber">[6](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_6)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_6"></span><span class="anchor" id="line-6-10"></span><span class="Comment"># fetch values from package.xml</span></span>
<span class="line"><span class="LineNumber">[7](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_7)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_7"></span><span class="anchor" id="line-7-10"></span><span class="ID">setup_args</span> = <span class="ID">generate_distutils_setup</span>(</span>
<span class="line"><span class="LineNumber">[8](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_8)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_8"></span><span class="anchor" id="line-8-8"></span>    <span class="ID">packages</span>=[<span class="String">'</span><span class="String">python_bindings_tutorial</span><span class="String">'</span>],</span>
<span class="line"><span class="LineNumber">[9](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_9)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_9"></span><span class="anchor" id="line-9-8"></span>    <span class="ID">package_dir</span>={<span class="String">'</span><span class="String">'</span>: <span class="String">'</span><span class="String">src</span><span class="String">'</span>})</span>
<span class="line"><span class="LineNumber">[10](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_10)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_10"></span><span class="anchor" id="line-10-8"></span></span>
<span class="line"><span class="LineNumber">[11](#CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_11)</span> <span class="LineAnchor" id="CA-db6c28650931aa126ee4e8b526d34c847a3bb63e_11"></span><span class="anchor" id="line-11-7"></span><span class="ID">setup</span>(**<span class="ID">setup_args</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="line-351"></span>

<span class="anchor" id="line-352"></span><span class="anchor" id="line-353"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-24"></span>

We then build the package with <tt class="backtick">rosmake</tt>.

</div>

<span class="anchor" id="line-354"></span>

<span class="anchor" id="line-355"></span><span class="anchor" id="line-356"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-25"></span>

We then build the package with <tt class="backtick">catkin_make</tt>.

</div>

<span class="anchor" id="line-357"></span>

### Testing the binding

<span class="anchor" id="line-358"></span>

You can now use the binding in Python scripts or in a Python shell<span class="anchor" id="line-359"></span><span class="anchor" id="line-360"></span>

<span class="anchor" id="line-361"></span><span class="anchor" id="line-362"></span><span class="anchor" id="line-363"></span><span class="anchor" id="line-364"></span><span class="anchor" id="line-365"></span><span class="anchor" id="line-366"></span><span class="anchor" id="line-367"></span><span class="anchor" id="line-368"></span><span class="anchor" id="line-1-26"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c" lang="en"><span class="line"><span class="LineNumber">[1](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_1)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_1"></span><span class="anchor" id="line-1-27"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">Int64</span></span>
<span class="line"><span class="LineNumber">[2](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_2)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_2"></span><span class="anchor" id="line-2-15"></span><span class="ResWord">from</span> <span class="ID">python_bindings_tutorial</span> <span class="ResWord">import</span> <span class="ID">AddTwoInts</span></span>
<span class="line"><span class="LineNumber">[3](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_3)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_3"></span><span class="anchor" id="line-3-15"></span><span class="ID">a</span> = <span class="ID">Int64</span>(<span class="Number">4</span>)</span>
<span class="line"><span class="LineNumber">[4](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_4)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_4"></span><span class="anchor" id="line-4-13"></span><span class="ID">b</span> = <span class="ID">Int64</span>(<span class="Number">2</span>)</span>
<span class="line"><span class="LineNumber">[5](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_5)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_5"></span><span class="anchor" id="line-5-13"></span><span class="ID">addtwoints</span> = <span class="ID">AddTwoInts</span>()</span>
<span class="line"><span class="LineNumber">[6](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_6)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_6"></span><span class="anchor" id="line-6-11"></span><span class="ResWord">sum</span> = <span class="ID">addtwoints</span>.<span class="ID">add</span>(<span class="ID">a</span>, <span class="ID">b</span>)</span>
<span class="line"><span class="LineNumber">[7](#CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_7)</span> <span class="LineAnchor" id="CA-b9c851381a415413b1ae10c58cc5f7b6f5f0711c_7"></span><span class="anchor" id="line-7-11"></span><span class="ResWord">sum</span></span>
</pre>

</div>

</div>

<span class="anchor" id="line-369"></span>

## Class with NodeHandle

<span class="anchor" id="line-370"></span>

As stated, a Python call to <tt class="backtick">rospy.init_node</tt> does not initialize roscpp. If roscpp is not initialized, instanciating <tt class="backtick">ros::NodeHandle</tt> will lead to a fatal error. A solution for this is provided by the [moveit_ros_planning_interface](http://moveit.ros.org). In any Python script that uses the wrapped class, two lines need to be added before instanciating <tt class="backtick">AddTwoInts</tt>:<span class="anchor" id="line-371"></span><span class="anchor" id="line-372"></span>

<span class="anchor" id="line-373"></span><span class="anchor" id="line-374"></span><span class="anchor" id="line-375"></span><span class="anchor" id="line-1-28"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-3391c57627ee7e52435dc8487b575e5c19c37de8\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-3391c57627ee7e52435dc8487b575e5c19c37de8" lang="en"><span class="line"><span class="LineNumber">[1](#CA-3391c57627ee7e52435dc8487b575e5c19c37de8_1)</span> <span class="LineAnchor" id="CA-3391c57627ee7e52435dc8487b575e5c19c37de8_1"></span><span class="anchor" id="line-1-29"></span><span class="ResWord">from</span> <span class="ID">moveit_ros_planning_interface._moveit_roscpp_initializer</span> <span class="ResWord">import</span> <span class="ID">roscpp_init</span></span>
<span class="line"><span class="LineNumber">[2](#CA-3391c57627ee7e52435dc8487b575e5c19c37de8_2)</span> <span class="LineAnchor" id="CA-3391c57627ee7e52435dc8487b575e5c19c37de8_2"></span><span class="anchor" id="line-2-16"></span><span class="ID">roscpp_init</span>(<span class="String">'</span><span class="String">node_name</span><span class="String">'</span>, [])</span>
</pre>

</div>

</div>

<span class="anchor" id="line-376"></span>

This will create a ROS node. The advantage of this method over a classical ROS service server/client implementation is thus not as clear as in the case without the need of <tt class="backtick">ros::NodeHandle</tt>.<span class="anchor" id="line-377"></span><span class="anchor" id="line-378"></span>

## Class with container of ROS messages

<span class="anchor" id="line-379"></span>

If the class uses containers of ROS messages, an extra conversion step must be added. This step is not specific to ROS but is part of the Boost Python library.<span class="anchor" id="line-380"></span><span class="anchor" id="line-381"></span>

### `std::vector<M>` as return type

<span class="anchor" id="line-382"></span>

In the file where the C++ wrapper class is defined, add these lines:<span class="anchor" id="line-383"></span><span class="anchor" id="line-384"></span>

<span class="anchor" id="line-385"></span><span class="anchor" id="line-386"></span><span class="anchor" id="line-387"></span><span class="anchor" id="line-388"></span><span class="anchor" id="line-389"></span><span class="anchor" id="line-390"></span><span class="anchor" id="line-391"></span><span class="anchor" id="line-392"></span><span class="anchor" id="line-393"></span><span class="anchor" id="line-394"></span><span class="anchor" id="line-395"></span><span class="anchor" id="line-396"></span><span class="anchor" id="line-397"></span><span class="anchor" id="line-398"></span><span class="anchor" id="line-399"></span><span class="anchor" id="line-400"></span><span class="anchor" id="line-401"></span><span class="anchor" id="line-402"></span><span class="anchor" id="line-403"></span><span class="anchor" id="line-404"></span><span class="anchor" id="line-405"></span><span class="anchor" id="line-406"></span><span class="anchor" id="line-407"></span><span class="anchor" id="line-408"></span><span class="anchor" id="line-409"></span><span class="anchor" id="line-410"></span><span class="anchor" id="line-411"></span><span class="anchor" id="line-412"></span><span class="anchor" id="line-413"></span><span class="anchor" id="line-414"></span><span class="anchor" id="line-415"></span><span class="anchor" id="line-416"></span><span class="anchor" id="line-417"></span><span class="anchor" id="line-418"></span><span class="anchor" id="line-1-30"></span>

<div class="highlight cpp">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008" lang="en"><span class="line"><span class="LineNumber">[1](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_1)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_1"></span><span class="anchor" id="line-1-31"></span><span class="Comment">// Extracted from https://gist.github.com/avli/b0bf77449b090b768663.</span></span>
<span class="line"><span class="LineNumber">[2](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_2)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_2"></span><span class="anchor" id="line-2-17"></span><span class="Comment"></span><span class="ResWord">template</span><<span class="ResWord">class</span> <span class="ID">T</span>></span>
<span class="line"><span class="LineNumber">[3](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_3)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_3"></span><span class="anchor" id="line-3-16"></span><span class="ResWord">struct</span> <span class="ID">vector_to_python</span></span>
<span class="line"><span class="LineNumber">[4](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_4)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_4"></span><span class="anchor" id="line-4-14"></span>{</span>
<span class="line"><span class="LineNumber">[5](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_5)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_5"></span><span class="anchor" id="line-5-14"></span>  <span class="ResWord">static</span> <span class="ID">PyObject</span>* <span class="ID">convert</span>(<span class="ResWord">const</span> <span class="ID">std</span>::<span class="ID">vector</span><<span class="ID">T</span>>& <span class="ID">vec</span>)</span>
<span class="line"><span class="LineNumber">[6](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_6)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_6"></span><span class="anchor" id="line-6-12"></span>  {</span>
<span class="line"><span class="LineNumber">[7](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_7)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_7"></span><span class="anchor" id="line-7-12"></span>    <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">list</span>* <span class="ID">l</span> = <span class="ResWord">new</span> <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">list</span>();</span>
<span class="line"><span class="LineNumber">[8](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_8)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_8"></span><span class="anchor" id="line-8-9"></span>    <span class="ResWord">for</span>(<span class="ID">std</span>::<span class="ID">size_t</span> <span class="ID">i</span> = <span class="Number">0</span>; <span class="ID">i</span> < <span class="ID">vec</span>.<span class="ID">size</span>(); <span class="ID">i</span>++)</span>
<span class="line"><span class="LineNumber">[9](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_9)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_9"></span><span class="anchor" id="line-9-9"></span>      (*<span class="ID">l</span>).<span class="ID">append</span>(<span class="ID">vec</span>[<span class="ID">i</span>]);</span>
<span class="line"><span class="LineNumber">[10](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_10)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_10"></span><span class="anchor" id="line-10-9"></span></span>
<span class="line"><span class="LineNumber">[11](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_11)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_11"></span><span class="anchor" id="line-11-8"></span>    <span class="ResWord">return</span> <span class="ID">l</span>-><span class="ID">ptr</span>();</span>
<span class="line"><span class="LineNumber">[12](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_12)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_12"></span><span class="anchor" id="line-12-7"></span>  }</span>
<span class="line"><span class="LineNumber">[13](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_13)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_13"></span><span class="anchor" id="line-13-7"></span>};</span>
<span class="line"><span class="LineNumber">[14](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_14)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_14"></span><span class="anchor" id="line-14-7"></span></span>
<span class="line"><span class="LineNumber">[15](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_15)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_15"></span><span class="anchor" id="line-15-7"></span><span class="ResWord">class</span> <span class="ID">Wrapper</span> : <span class="ResWord">public</span> <span class="ID">WrappedClass</span></span>
<span class="line"><span class="LineNumber">[16](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_16)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_16"></span><span class="anchor" id="line-16-7"></span>{</span>
<span class="line"><span class="LineNumber">[17](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_17)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_17"></span><span class="anchor" id="line-17-7"></span><span class="Comment">/*</span></span>
<span class="line"><span class="LineNumber">[18](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_18)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_18"></span><span class="anchor" id="line-18-6"></span><span class="Comment">...</span></span>
<span class="line"><span class="LineNumber">[19](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_19)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_19"></span><span class="anchor" id="line-19-5"></span><span class="Comment">*/</span></span>
<span class="line"><span class="LineNumber">[20](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_20)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_20"></span><span class="anchor" id="line-20-5"></span>    <span class="ID">std</span>::<span class="ID">vector</span><<span class="ID">std</span>::<span class="ID">string</span>> <span class="ID">wrapper_fun</span>(<span class="ResWord">const</span> <span class="ID">std</span>::<span class="ID">string</span> <span class="ID">str_msg</span>)</span>
<span class="line"><span class="LineNumber">[21](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_21)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_21"></span><span class="anchor" id="line-21-5"></span>    {</span>
<span class="line"><span class="LineNumber">[22](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_22)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_22"></span><span class="anchor" id="line-22-5"></span>      <span class="Comment">/* ... */</span></span>
<span class="line"><span class="LineNumber">[23](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_23)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_23"></span><span class="anchor" id="line-23-5"></span>    }</span>
<span class="line"><span class="LineNumber">[24](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_24)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_24"></span><span class="anchor" id="line-24-5"></span></span>
<span class="line"><span class="LineNumber">[25](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_25)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_25"></span><span class="anchor" id="line-25-5"></span>};</span>
<span class="line"><span class="LineNumber">[26](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_26)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_26"></span><span class="anchor" id="line-26-5"></span></span>
<span class="line"><span class="LineNumber">[27](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_27)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_27"></span><span class="anchor" id="line-27-5"></span><span class="ID">BOOST_PYTHON_MODULE</span>(<span class="ID">module_wrapper_cpp</span>)</span>
<span class="line"><span class="LineNumber">[28](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_28)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_28"></span><span class="anchor" id="line-28-5"></span>{</span>
<span class="line"><span class="LineNumber">[29](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_29)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_29"></span><span class="anchor" id="line-29-5"></span>  <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">class_</span><<span class="ID">Wrapper</span>>(<span class="String">"</span><span class="String">Wrapper</span><span class="String">"</span>, <span class="ID">bp</span>::<span class="ID">init</span><<span class="Comment">/* ... */</span>>())</span>
<span class="line"><span class="LineNumber">[30](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_30)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_30"></span><span class="anchor" id="line-30-5"></span>    .<span class="ID">def</span>(<span class="String">"</span><span class="String">fun</span><span class="String">"</span>, &<span class="ID">Wrapper</span>::<span class="ID">wrapper_fun</span>);</span>
<span class="line"><span class="LineNumber">[31](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_31)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_31"></span><span class="anchor" id="line-31-5"></span></span>
<span class="line"><span class="LineNumber">[32](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_32)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_32"></span><span class="anchor" id="line-32-5"></span>  <span class="ID">boost</span>::<span class="ID">python</span>::<span class="ID">to_python_converter</span><<span class="ID">std</span>::<span class="ID">vector</span><<span class="ID">std</span>::<span class="ID">string</span>, <span class="ID">std</span>::<span class="ID">allocator</span><<span class="ID">std</span>::<span class="ID">string</span>> >, <span class="ID">vector_to_python</span><<span class="ID">std</span>::<span class="ID">string</span>> >();</span>
<span class="line"><span class="LineNumber">[33](#CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_33)</span> <span class="LineAnchor" id="CA-a7046de9ba9e3cfad48d37c6823ac8e8fa5c5008_33"></span><span class="anchor" id="line-33-5"></span>}</span>
</pre>

</div>

</div>

<span class="anchor" id="line-419"></span>

### `std::vector<M>` as argument type

<span class="anchor" id="line-420"></span>

Cf. Boost.Python documentation.<span class="anchor" id="line-421"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/Using a C++ class in Python (last edited 2015-01-07 10:16:01 by <span title="GaelEcorchard @ ui116.felk.cvut.cz[147.32.85.116]">[GaelEcorchard](/GaelEcorchard "GaelEcorchard @ ui116.felk.cvut.cz[147.32.85.116]")</span>)
