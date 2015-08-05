<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [WritingPublisherSubscriber(python)](/action/fullsearch/ROS/Tutorials/WritingPublisherSubscriber%28python%29?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FWritingPublisherSubscriber%28python%29%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [creating a ROS msg and srv](/ROS/Tutorials/CreatingMsgAndSrv).</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-3-1"></span><span class="anchor" id="line-4-1"></span><span class="anchor" id="line-5-1"></span><span class="anchor" id="line-6-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #bbceee">![(!)](/moin_static197/rostheme/img/idea.png "(!)")It is appreciated that problems/questions regarding this tutorial are asked on [answers.ros.org](http://answers.ros.org). Don't forget to include in your question the link to this page, versions of your OS & ROS, and also add appropriate tags.</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-7-1"></span><span class="anchor" id="line-8-1"></span><span class="anchor" id="line-9-1"></span>

## Writing a Simple Publisher and Subscriber (Python)

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial covers how to write a publisher and subscriber node in python.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Examining the simple publisher and subscriber](/ROS/Tutorials/ExaminingPublisherSubscriber)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

<div class="table-of-contents">

Contents

1.  [Writing the Publisher Node](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.Writing_the_Publisher_Node)
    1.  [The Code](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.The_Code)
    2.  [The Code Explained](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.The_Code_Explained)
2.  [Writing the Subscriber Node](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.Writing_the_Subscriber_Node)
    1.  [The Code](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.The_Code-1)
    2.  [The Code Explained](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.The_Code_Explained-1)
3.  [Building your nodes](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.Building_your_nodes)
4.  [Additional Resources](#Additional_Resources)
    1.  [Video Tutorial](#Video_Tutorial)

</div>

<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

<div dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.content" lang="en"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.top"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2"></span>

### Writing the Publisher Node

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3"></span>

"Node" is the ROS term for an executable that is connected to the ROS network. Here we'll create the publisher ("talker") node which will continually broadcast a message.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5"></span>

Change directory into the beginner_tutorials package, you created in the earlier tutorial, [creating a package](/ROS/Tutorials/CreatingPackage):<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-1"></span>$ roscd beginner_tutorials</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10"></span>

#### The Code

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-12"></span>

First lets create a 'scripts' folder to store our Python scripts in:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-14"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-17"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-2"></span>$ mkdir scripts
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-1"></span>$ cd scripts</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-19"></span>

Then download the example script [talker.py](https://raw.github.com/ros/ros_tutorials/indigo-devel/rospy_tutorials/001_talker_listener/talker.py) to your new <tt class="backtick">scripts</tt> directory and make it executable:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-21"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-22"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-24"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-3"></span>$ wget https://raw.github.com/ros/ros_tutorials/indigo-devel/rospy_tutorials/001_talker_listener/talker.py
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-2"></span>$ chmod +x talker.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-25"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-26"></span>

You can view and edit the file with <tt> $ rosed beginner_tutorials talker.py </tt> or just look below.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-27"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-28"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-29"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-30"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-31"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-32"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-33"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-34"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-35"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-36"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-37"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-38"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-39"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-40"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-41"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-42"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-43"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-44"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-45"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-46"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-47"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-48"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-49"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-50"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-4"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-5"></span><span class="Comment">#!/usr/bin/env python</span></span>
<span class="line"><span class="LineNumber">[2](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_2)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-3"></span><span class="Comment"># license removed for brevity</span></span>
<span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-1"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-1"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">String</span></span>
<span class="line"><span class="LineNumber">[5](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_5)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-1"></span></span>
<span class="line"><span class="LineNumber">[6](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_6)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-1"></span><span class="ResWord">def</span> <span class="ID">talker</span>():</span>
<span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-1"></span>    <span class="ID">pub</span> = <span class="ID">rospy</span>.<span class="ID">Publisher</span>(<span class="String">'</span><span class="String">chatter</span><span class="String">'</span>, <span class="ID">String</span>, <span class="ID">queue_size</span>=<span class="Number">10</span>)</span>
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-1"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">talker</span><span class="String">'</span>, <span class="ID">anonymous</span>=<span class="ResWord">True</span>)</span>
<span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-1"></span>    <span class="ID">rate</span> = <span class="ID">rospy</span>.<span class="ID">Rate</span>(<span class="Number">10</span>) <span class="Comment"># 10hz</span></span>
<span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-1"></span>    <span class="ResWord">while</span> <span class="ResWord">not</span> <span class="ID">rospy</span>.<span class="ID">is_shutdown</span>():</span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-11-1"></span>        <span class="ID">hello_str</span> = <span class="String">"</span><span class="String">hello world</span> <span class="String">%s</span><span class="String">"</span> % <span class="ID">rospy</span>.<span class="ID">get_time</span>()</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-12-1"></span>        <span class="ID">rospy</span>.<span class="ID">loginfo</span>(<span class="ID">hello_str</span>)</span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-13-1"></span>        <span class="ID">pub</span>.<span class="ID">publish</span>(<span class="ID">hello_str</span>)</span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-14-1"></span>        <span class="ID">rate</span>.<span class="ID">sleep</span>()</span>
<span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-15-1"></span></span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-16-1"></span><span class="ResWord">if</span> <span class="ID">__name__</span> == <span class="String">'</span><span class="String">__main__</span><span class="String">'</span>:</span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-17-1"></span>    <span class="ResWord">try</span>:</span>
<span class="line"><span class="LineNumber">[18](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_18)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-18-1"></span>        <span class="ID">talker</span>()</span>
<span class="line"><span class="LineNumber">[19](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_19)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-19-1"></span>    <span class="ResWord">except</span> <span class="ID">rospy</span>.<span class="ID">ROSInterruptException</span>:</span>
<span class="line"><span class="LineNumber">[20](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_20)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c82832e0d612370fe9886563f0b7f5433f6caee1_20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-20-1"></span>        <span class="ResWord">pass</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-51"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-52"></span>

#### The Code Explained

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-53"></span>

Now, let's break the code down.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-54"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-55"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-7"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-da6097954e7fee459e60cb816897ac01d266cf48\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-da6097954e7fee459e60cb816897ac01d266cf48" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-da6097954e7fee459e60cb816897ac01d266cf48_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-da6097954e7fee459e60cb816897ac01d266cf48_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-8"></span><span class="Comment">#!/usr/bin/env python</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-2"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-56"></span>Every Python ROS [Node](/Nodes) will have this declaration at the top. The first line makes sure your script is executed as a Python script.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-57"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-58"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-4"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f\', 3, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f" lang="en"><span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-11"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-fb2d85bed2cdd0892041958808af40a4b2e2619f_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-7"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">String</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-2"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-59"></span>You need to import <tt>rospy</tt> if you are writing a ROS [Node](/Nodes). The <tt>std_msgs.msg</tt> import is so that we can reuse the <tt>std_msgs/String</tt> message type (a simple string container) for publishing.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-60"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-61"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-2"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1\', 7, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1" lang="en"><span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-14"></span>    <span class="ID">pub</span> = <span class="ID">rospy</span>.<span class="ID">Publisher</span>(<span class="String">'</span><span class="String">chatter</span><span class="String">'</span>, <span class="ID">String</span>, <span class="ID">queue_size</span>=<span class="Number">10</span>)</span>
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-0d784dd4f9d2b50d6bfc6dbddf4a45b58f61bbe1_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-10"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">talker</span><span class="String">'</span>, <span class="ID">anonymous</span>=<span class="ResWord">True</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-4"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-62"></span>This section of code defines the talker's interface to the rest of ROS. <tt>pub = rospy.Publisher("chatter", String, queue_size=10)</tt> declares that your node is publishing to the <tt>chatter</tt> topic using the message type <tt>String</tt>. <tt>String</tt> here is actually the class <tt>std_msgs.msg.String</tt>. The <tt class="backtick">queue_size</tt> argument is <span style="background-color:#FFFF00; font-weight:bold; padding: 3px;">New in ROS hydro</span> and limits the amount of queued messages if any subscriber is not receiving the them fast enough. In older ROS distributions just omit the argument.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-63"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-64"></span>

The next line, <tt>rospy.init_node(NAME)</tt>, is very important as it tells rospy the name of your node -- until rospy has this information, it cannot start communicating with the ROS [Master](/Master). In this case, your node will take on the name <tt>talker</tt>. NOTE: the name must be a [base name](/Names), i.e. it cannot contain any slashes <tt class="backtick">"/"</tt>.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-65"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-66"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-2"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-deeb77cb436e1a6b1a92349b80ed4634d8d9587b\', 9, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-deeb77cb436e1a6b1a92349b80ed4634d8d9587b" lang="en"><span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-deeb77cb436e1a6b1a92349b80ed4634d8d9587b_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-deeb77cb436e1a6b1a92349b80ed4634d8d9587b_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-17"></span>    <span class="ID">rate</span> = <span class="ID">rospy</span>.<span class="ID">Rate</span>(<span class="Number">10</span>) <span class="Comment"># 10hz</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-7"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-67"></span>This line creates a <tt class="backtick">Rate</tt> object <tt class="backtick">r</tt>. With the help of its method <tt class="backtick">sleep()</tt>, it offers a convenient way for looping at the desired rate. With its argument of <tt class="backtick">10</tt>, we should expect to go through the loop 10 times per second (as long as our processing time does not exceed 1/10th of a second!)<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-68"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-69"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-2"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1\', 10, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1" lang="en"><span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-20"></span>    <span class="ResWord">while</span> <span class="ResWord">not</span> <span class="ID">rospy</span>.<span class="ID">is_shutdown</span>():</span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-15"></span>        <span class="ID">hello_str</span> = <span class="String">"</span><span class="String">hello world</span> <span class="String">%s</span><span class="String">"</span> % <span class="ID">rospy</span>.<span class="ID">get_time</span>()</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-11"></span>        <span class="ID">rospy</span>.<span class="ID">loginfo</span>(<span class="ID">hello_str</span>)</span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-10"></span>        <span class="ID">pub</span>.<span class="ID">publish</span>(<span class="ID">hello_str</span>)</span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c119a947845452aa2f89a85d4fb37e402941b0e1_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-10"></span>        <span class="ID">rate</span>.<span class="ID">sleep</span>()</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-4"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-70"></span>This loop is a fairly standard rospy construct: checking the <tt>rospy.is_shutdown()</tt> flag and then doing work. You have to check <tt class="backtick">is_shutdown()</tt> to check if your program should exit (e.g. if there is a <tt class="backtick">Ctrl-C</tt> or otherwise). In this case, the "work" is a call to <tt>pub.publish(String(str))</tt> that publishes to our <tt>chatter</tt> topic using a newly created <tt>String</tt> message. The loop calls <tt>r.sleep()</tt>, which sleeps just long enough to maintain the desired rate through the loop.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-71"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-72"></span>

(You may also run across <tt class="backtick">rospy.sleep()</tt> which is similar to <tt>time.sleep()</tt> except that it works with simulated time as well (see [Clock](/Clock)).)<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-73"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-74"></span>

This loop also calls <tt>rospy.loginfo(str)</tt>, which performs triple-duty: the messages get printed to screen, it gets written to the Node's log file, and it gets written to [rosout](/rosout). [rosout](/rosout) is a handy for debugging: you can pull up messages using [rqt_console](/rqt_console) instead of having to find the console window with your Node's output.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-75"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-76"></span>

<tt>std_msgs.msg.String</tt> is a very simple message type, so you may be wondering what it looks like to publish more complicated types. The general rule of thumb is that _constructor args are in the same order as in the <tt>.msg</tt> file_. You can also pass in no arguments and initialize the fields directly, e.g.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-77"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-78"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-79"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-80"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-81"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-21"></span>msg = String()
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-16"></span>msg.data = str</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-82"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-83"></span>

or you can initialize some of the fields and leave the rest with default values:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-84"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-85"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-86"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-87"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-22"></span>String(data=str)</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-88"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-89"></span>

You may be wondering about the last little bit:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-90"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-91"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-24"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-11-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-12-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-13-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-14-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-15-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-16-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-17-2"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f\', 17, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f" lang="en"><span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-25"></span>    <span class="ResWord">try</span>:</span>
<span class="line"><span class="LineNumber">[18](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_18)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-19"></span>        <span class="ID">talker</span>()</span>
<span class="line"><span class="LineNumber">[19](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_19)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-14"></span>    <span class="ResWord">except</span> <span class="ID">rospy</span>.<span class="ID">ROSInterruptException</span>:</span>
<span class="line"><span class="LineNumber">[20](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_20)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-03913aa01eb4dc084a8831e8982cf5d7c49e193f_20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-13"></span>        <span class="ResWord">pass</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-6"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-92"></span>In addition to the standard Python <tt class="backtick">__main__</tt> check, this catches a <tt class="backtick">rospy.ROSInterruptException</tt> exception, which can be thrown by <tt class="backtick">rospy.sleep()</tt> and <tt class="backtick">rospy.Rate.sleep()</tt> methods when <tt class="backtick">Ctrl-C</tt> is pressed or your Node is otherwise shutdown. The reason this exception is raised is so that you don't accidentally continue executing code after the <tt class="backtick">sleep()</tt>.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-93"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-94"></span>

Now we need to write a node to receive the messages.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-95"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-96"></span>

### Writing the Subscriber Node

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-97"></span>

#### The Code

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-98"></span>

Download the [listener.py](https://raw.github.com/ros/ros_tutorials/indigo-devel/rospy_tutorials/001_talker_listener/listener.py) file into your scripts directory:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-99"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-100"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-101"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-102"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-26"></span>$ roscd beginner_tutorials/scripts/
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-20"></span>$ wget https://raw.github.com/ros/ros_tutorials/indigo-devel/rospy_tutorials/001_talker_listener/listener.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-103"></span>

The file contents look close to:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-104"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-105"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-106"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-107"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-108"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-109"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-110"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-111"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-112"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-113"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-114"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-115"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-116"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-117"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-118"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-119"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-120"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-121"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-122"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-123"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-124"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-125"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-126"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-127"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-128"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-129"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-27"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-28"></span><span class="Comment">#!/usr/bin/env python</span></span>
<span class="line"><span class="LineNumber">[2](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_2)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-21"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-15"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">String</span></span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-14"></span></span>
<span class="line"><span class="LineNumber">[5](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_5)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-13"></span><span class="ResWord">def</span> <span class="ID">callback</span>(<span class="ID">data</span>):</span>
<span class="line"><span class="LineNumber">[6](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_6)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-10"></span>    <span class="ID">rospy</span>.<span class="ID">loginfo</span>(<span class="ID">rospy</span>.<span class="ID">get_caller_id</span>() + <span class="String">"</span><span class="String">I heard</span> <span class="String">%s</span><span class="String">"</span>, <span class="ID">data</span>.<span class="ID">data</span>)</span>
<span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-8"></span></span> 
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-7"></span><span class="ResWord">def</span> <span class="ID">listener</span>():</span>
<span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-7"></span></span>
<span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-4"></span>    <span class="Comment"># In ROS, nodes are uniquely named. If two nodes with the same</span></span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-11-3"></span>    <span class="Comment"># node are launched, the previous one is kicked off. The</span></span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-12-3"></span>    <span class="Comment"># anonymous=True flag means that rospy will choose a unique</span></span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-13-3"></span>    <span class="Comment"># name for our 'listener' node so that multiple listeners can</span></span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-14-3"></span>    <span class="Comment"># run simultaneously.</span></span>
<span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-15-3"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">listener</span><span class="String">'</span>, <span class="ID">anonymous</span>=<span class="ResWord">True</span>)</span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-16-3"></span></span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-17-3"></span>    <span class="ID">rospy</span>.<span class="ID">Subscriber</span>(<span class="String">"</span><span class="String">chatter</span><span class="String">"</span>, <span class="ID">String</span>, <span class="ID">callback</span>)</span>
<span class="line"><span class="LineNumber">[18](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_18)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-18-2"></span></span>
<span class="line"><span class="LineNumber">[19](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_19)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-19-2"></span>    <span class="Comment"># spin() simply keeps python from exiting until this node is stopped</span></span>
<span class="line"><span class="LineNumber">[20](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_20)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-20-2"></span>    <span class="ID">rospy</span>.<span class="ID">spin</span>()</span>
<span class="line"><span class="LineNumber">[21](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_21)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_21"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-21-1"></span></span>
<span class="line"><span class="LineNumber">[22](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_22)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_22"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-22-1"></span><span class="ResWord">if</span> <span class="ID">__name__</span> == <span class="String">'</span><span class="String">__main__</span><span class="String">'</span>:</span>
<span class="line"><span class="LineNumber">[23](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_23)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-1b01f1a47bfa1c005374252f8e11db76472de33e_23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-23-1"></span>    <span class="ID">listener</span>()</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-130"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-131"></span>

Don't forget to make the node executable:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-132"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-133"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-134"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-135"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-29"></span>$ chmod +x listener.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-136"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-137"></span>

#### The Code Explained

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-138"></span>

The code for <tt>listener.py</tt> is similar to <tt>talker.py</tt>, except we've introduced a new callback-based mechanism for subscribing to messages.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-139"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-140"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-30"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-22"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-31"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-8-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-9-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-11-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-12-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-13-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-14-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-15-4"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62\', 15, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62" lang="en"><span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-32"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">listener</span><span class="String">'</span>, <span class="ID">anonymous</span>=<span class="ResWord">True</span>)</span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-24"></span></span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-18"></span>    <span class="ID">rospy</span>.<span class="ID">Subscriber</span>(<span class="String">"</span><span class="String">chatter</span><span class="String">"</span>, <span class="ID">String</span>, <span class="ID">callback</span>)</span>
<span class="line"><span class="LineNumber">[18](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_18)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-17"></span></span>
<span class="line"><span class="LineNumber">[19](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_19)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-16"></span>    <span class="Comment"># spin() simply keeps python from exiting until this node is stopped</span></span>
<span class="line"><span class="LineNumber">[20](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_20)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.CA-c54953afb3f7ac20abfe7460208d0cd6c36c1d62_20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-13"></span>    <span class="ID">rospy</span>.<span class="ID">spin</span>()</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-10-6"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-141"></span>This declares that your node subscribes to the <tt>chatter</tt> topic which is of type <tt>std_msgs.msgs.String</tt>. When new messages are received, <tt>callback</tt> is invoked with the message as the first argument.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-142"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-143"></span>

We also changed up the call to <tt>rospy.init_node()</tt> somewhat. We've added the <tt>anonymous=True</tt> keyword argument. ROS requires that each node have a unique name. If a node with the same name comes up, it bumps the previous one. This is so that malfunctioning nodes can easily be kicked off the network. The <tt>anonymous=True</tt> flag tells <tt>rospy</tt> to generate a unique name for the node so that you can have multiple <tt>listener.py</tt> nodes run easily.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-144"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-145"></span>

The final addition, <tt>rospy.spin()</tt> simply keeps your node from exiting until the node has been shutdown. Unlike roscpp, rospy.spin() does not affect the subscriber callback functions, as those have their own threads.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-146"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-147"></span>

### Building your nodes

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-148"></span>

We use CMake as our build system and, yes, you have to use it even for Python nodes. This is to make sure that the autogenerated Python code for messages and services is created.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-149"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-150"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-151"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-152"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-153"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-154"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-155"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-156"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-157"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-158"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-33"></span>

We also use a Makefile for a bit of convenience. <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-25"></span><tt>roscreate-pkg</tt> automatically created a Makefile, so you don't have to edit it.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-18"></span>

Now run make:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-7-11"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-34"></span>$ make</pre>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-159"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-160"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-161"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-162"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-163"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-164"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-165"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-166"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-167"></span>

<div class="buildsystem catkin"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-35"></span>

Go to your catkin workspace and run <tt class="backtick">catkin_make</tt>:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-26"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-3-20"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-4-19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-5-18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-6-15"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-1-36"></span>$ cd ~/catkin_ws
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-2-27"></span>$ catkin_make</pre>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-168"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.line-169"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingPublisherSubscriber.bottom"></span></div>

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

Now that you have written a simple publisher and subscriber, let's [examine the simple publisher and subscriber](/ROS/Tutorials/ExaminingPublisherSubscriber).<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span>

### Additional Resources

<span class="anchor" id="line-30"></span><span class="anchor" id="line-31"></span>

Here are some additional resources contributed by the community.<span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

#### Video Tutorial

<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span>

The following video presents a small tutorial explaining how to write and test a publisher and subscriber in ROS with C++ and Python based on the talker/listener example above<span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span>

<object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/8bUkLNEu5Ns&amp;hl=en_US&amp;fs=1&amp;hd=1"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><embed src="http://www.youtube.com/v/8bUkLNEu5Ns&amp;hl=en_US&amp;fs=1&amp;hd=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="295"></object><span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

<span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

<span class="anchor" id="line-42"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/WritingPublisherSubscriber(python) (last edited 2015-08-04 18:16:29 by <span title="William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]">[WilliamWoodall](/WilliamWoodall "William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]")</span>)
