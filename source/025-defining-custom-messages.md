<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [DefiningCustomMessages](/action/fullsearch/ROS/Tutorials/DefiningCustomMessages?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FDefiningCustomMessages%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [ROS tutorials](/ROS/Tutorials).</td>

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

## Defining Custom Messages

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial will show you how to define your own custom message data types using the ROS [Message Description Language](/ROS/Message_Description_Language).  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:**   

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Using a C++ class in Python](/ROS/Tutorials/Using%20a%20C%2B%2B%20class%20in%20Python)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

<div class="table-of-contents">

Contents

1.  [Generating Messages](#Generating_Messages)
2.  [Including or Importing Messages](#Including_or_Importing_Messages)
    1.  [C++](#C.2B-.2B-)
    2.  [Python](#Python)
3.  [Dependencies](#Dependencies)

</div>

<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

## Generating Messages

<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span>

Generating a message is easy. Simply place a .msg file inside the msg directory in a package. Please follow [previous tutorial about creating .msg files](/ROS/Tutorials/CreatingMsgAndSrv#Creating_a_msg) (don't forget to choose build system type at the top of the page there).<span class="anchor" id="line-30"></span><span class="anchor" id="line-31"></span>

## Including or Importing Messages

<span class="anchor" id="line-32"></span>

### C++

<span class="anchor" id="line-33"></span>

Messages are put into a namespace that matches the name of the package. ie.<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span><span class="anchor" id="line-1-2"></span>

<div class="highlight cpp">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79" lang="en"><span class="line"><span class="LineNumber">[1](#CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_1)</span> <span class="LineAnchor" id="CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_1"></span><span class="anchor" id="line-1-3"></span><span class="Preprc">#</span><span class="Preprc">include <std_msgs</span><span class="Preprc">/</span><span class="Preprc">String.h></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[2](#CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_2)</span> <span class="LineAnchor" id="CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_2"></span><span class="anchor" id="line-2-2"></span><span class="Preprc"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_3)</span> <span class="LineAnchor" id="CA-8c8acf0cea72e86f6fa563c6cb301f649db09d79_3"></span><span class="anchor" id="line-3-2"></span><span class="ID">std_msgs</span>::<span class="ID">String</span> <span class="ID">msg</span>;</span>
</pre>

</div>

</div>

<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span>

### Python

<span class="anchor" id="line-41"></span>

<span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-1-4"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-3370392f843a00ef86c85a9b0065a438aeca9ac2\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-3370392f843a00ef86c85a9b0065a438aeca9ac2" lang="en"><span class="line"><span class="LineNumber">[1](#CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_1)</span> <span class="LineAnchor" id="CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_1"></span><span class="anchor" id="line-1-5"></span><span class="ResWord">from</span> <span class="ID">std_msgs.msg</span> <span class="ResWord">import</span> <span class="ID">String</span></span>
<span class="line"><span class="LineNumber">[2](#CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_2)</span> <span class="LineAnchor" id="CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_2"></span><span class="anchor" id="line-2-3"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_3)</span> <span class="LineAnchor" id="CA-3370392f843a00ef86c85a9b0065a438aeca9ac2_3"></span><span class="anchor" id="line-3-3"></span><span class="ID">msg</span> = <span class="ID">String</span>()</span>
</pre>

</div>

</div>

<span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span>

## Dependencies

<span class="anchor" id="line-48"></span>

If you are using the new custom message defined in a different package, remember to add:<span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-6"></span>

to <tt class="backtick">manifest.xml</tt>:<span class="anchor" id="line-2-4"></span><span class="anchor" id="line-3-4"></span><span class="anchor" id="line-4-2"></span>

<pre><span class="anchor" id="line-1-7"></span><depend package="name_of_package_containing_custom_msg"/></pre>

</div>

<span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

<span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-8"></span>

to [package.xml](/catkin/package.xml):<span class="anchor" id="line-2-5"></span><span class="anchor" id="line-3-5"></span><span class="anchor" id="line-4-3"></span><span class="anchor" id="line-5-2"></span>

<pre><span class="anchor" id="line-1-9"></span><build_depend>name_of_package_containing_custom_msg</build_depend>
<span class="anchor" id="line-2-6"></span><run_depend>name_of_package_containing_custom_msg</run_depend></pre>

<span class="anchor" id="line-6-2"></span>

<span class="anchor" id="line-7-2"></span><span class="anchor" id="line-8-2"></span><span class="anchor" id="line-9-2"></span>

<pre><span class="anchor" id="line-1-10"></span><build_depend>message_generation</build_depend>
<span class="anchor" id="line-2-7"></span><run_depend>message_runtime</run_depend></pre>

</div>

<span class="anchor" id="line-67"></span>

and you will need to add this to your CMakeList.txt:<span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

<pre><span class="anchor" id="line-1-11"></span>findPackage(message_generation)
<span class="anchor" id="line-2-8"></span>catkin_package(CATKIN_DEPENDS message_runtime)
<span class="anchor" id="line-3-6"></span>add_message_files(FILE your_msg_file.msg)</pre>

<span class="anchor" id="line-73"></span>

The [ROSNodeTutorialPython](/ROSNodeTutorialPython) tutorial shows an example of the previously described talker and listener tutorials using a custom message, with implementations in C++ and Python.<span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span>

<span class="anchor" id="line-76"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/DefiningCustomMessages (last edited 2015-04-08 00:22:21 by <span title="wuyan @ 121.8.210.7[121.8.210.7]">[wuyan](/wuyan "wuyan @ 121.8.210.7[121.8.210.7]")</span>)
