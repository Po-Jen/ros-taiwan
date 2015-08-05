<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [WritingServiceClient(python)](/action/fullsearch/ROS/Tutorials/WritingServiceClient%28python%29?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FWritingServiceClient%28python%29%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [examining the simple publisher and subscriber](/ROS/Tutorials/ExaminingPublisherSubscriber).</td>

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

## Writing a Simple Service and Client (Python)

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial covers how to write a service and client node in python.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Examining the simple service and client](/ROS/Tutorials/ExaminingServiceClient)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

<div class="table-of-contents">

Contents

1.  [Writing a Service Node](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.Writing_a_Service_Node)
    1.  [The Code](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.The_Code)
    2.  [The Code Explained](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.The_Code_Explained)
2.  [Writing the Client Node](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.Writing_the_Client_Node)
    1.  [The Code](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.The_Code-1)
    2.  [The Code Explained](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.The_Code_Explained-1)
3.  [Building your nodes](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.Building_your_nodes)
4.  [Try it out!](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.Try_it_out.21)

</div>

<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

<div dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.content" lang="en"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.top"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2"></span>

### Writing a Service Node

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3"></span>

Here we'll create the service ("add_two_ints_server") node which will receive two ints and return the sum.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-1"></span>

Change directory into the beginner_tutorials package, you created in the earlier tutorial, [creating a package](/ROS/Tutorials/CreatingPackage):

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10"></span>

<div class="buildsystem catkin"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-2"></span>

Change directory into the beginner_tutorials package, you created in the earlier tutorial, [creating a package](/ROS/Tutorials/CreatingPackage%3Fbuildsystem%3Dcatkin):

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-3"></span>$ roscd beginner_tutorials</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15"></span>

Please make sure you have followed the directions in the previous tutorial for creating the service needed in this tutorial, [creating the AddTwoInts.srv](/ROS/Tutorials/CreatingMsgAndSrv#Creating_a_srv) (be sure to choose the right version of build tool you're using at the top of wiki page in the link).<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17"></span>

#### The Code

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-18"></span>

Create the **scripts/add_two_ints_server.py** file within the beginner_tutorials package and paste the following inside it:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-20"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-21"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-22"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-24"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-25"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-26"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-27"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-28"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-29"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-30"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-31"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-32"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-33"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-34"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-35"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-36"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-37"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-38"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-39"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-40"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-41"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-4"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-18-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-19-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-20-1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-5"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-6"></span><span class="Comment">#!/usr/bin/env python</span></span>
<span class="line"><span class="LineNumber">[2](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_2)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-2"></span><span class="ResWord">import</span> <span class="ID">roslib</span>; <span class="ID">roslib</span>.<span class="ID">load_manifest</span>(<span class="String">'</span><span class="String">beginner_tutorials</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-2"></span><span class="ResWord">from</span> <span class="ID">beginner_tutorials.srv</span> <span class="ResWord">import</span> *</span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-2"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[5](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_5)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-2"></span></span>
<span class="line"><span class="LineNumber">[6](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_6)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-2"></span><span class="ResWord">def</span> <span class="ID">handle_add_two_ints</span>(<span class="ID">req</span>):</span>
<span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-2"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">Returning [</span><span class="String">%s</span> <span class="String">+</span> <span class="String">%s</span> <span class="String">=</span> <span class="String">%s</span><span class="String">]</span><span class="String">"</span>%(<span class="ID">req</span>.<span class="ID">a</span>, <span class="ID">req</span>.<span class="ID">b</span>, (<span class="ID">req</span>.<span class="ID">a</span> + <span class="ID">req</span>.<span class="ID">b</span>))</span>
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-2"></span>    <span class="ResWord">return</span> <span class="ID">AddTwoIntsResponse</span>(<span class="ID">req</span>.<span class="ID">a</span> + <span class="ID">req</span>.<span class="ID">b</span>)</span>
<span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-2"></span></span>
<span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-2"></span><span class="ResWord">def</span> <span class="ID">add_two_ints_server</span>():</span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-2"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">add_two_ints_server</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-2"></span>    <span class="ID">s</span> = <span class="ID">rospy</span>.<span class="ID">Service</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>, <span class="ID">AddTwoInts</span>, <span class="ID">handle_add_two_ints</span>)</span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13-2"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">Ready to add two ints.</span><span class="String">"</span></span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14-2"></span>    <span class="ID">rospy</span>.<span class="ID">spin</span>()</span>
<span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15-2"></span></span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16-2"></span><span class="ResWord">if</span> <span class="ID">__name__</span> == <span class="String">"</span><span class="String">__main__</span><span class="String">"</span>:</span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-6e40b6a054990a096d1fbfef2d938f40b439dade_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17-2"></span>    <span class="ID">add_two_ints_server</span>()</span>
</pre>

</div>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-42"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-43"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-44"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-45"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-46"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-47"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-48"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-49"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-50"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-51"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-52"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-53"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-54"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-55"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-56"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-57"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-58"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-59"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-60"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-61"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-62"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-63"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-64"></span>

<div class="buildsystem catkin"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-7"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17-3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-18-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-19-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-20-2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-8"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-9"></span><span class="Comment">#!/usr/bin/env python</span></span>
<span class="line"><span class="LineNumber">[2](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_2)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-4"></span></span>
<span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-4"></span><span class="ResWord">from</span> <span class="ID">beginner_tutorials.srv</span> <span class="ResWord">import</span> *</span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-4"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[5](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_5)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-4"></span></span>
<span class="line"><span class="LineNumber">[6](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_6)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-4"></span><span class="ResWord">def</span> <span class="ID">handle_add_two_ints</span>(<span class="ID">req</span>):</span>
<span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-4"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">Returning [</span><span class="String">%s</span> <span class="String">+</span> <span class="String">%s</span> <span class="String">=</span> <span class="String">%s</span><span class="String">]</span><span class="String">"</span>%(<span class="ID">req</span>.<span class="ID">a</span>, <span class="ID">req</span>.<span class="ID">b</span>, (<span class="ID">req</span>.<span class="ID">a</span> + <span class="ID">req</span>.<span class="ID">b</span>))</span>
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-4"></span>    <span class="ResWord">return</span> <span class="ID">AddTwoIntsResponse</span>(<span class="ID">req</span>.<span class="ID">a</span> + <span class="ID">req</span>.<span class="ID">b</span>)</span>
<span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-4"></span></span>
<span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-4"></span><span class="ResWord">def</span> <span class="ID">add_two_ints_server</span>():</span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-4"></span>    <span class="ID">rospy</span>.<span class="ID">init_node</span>(<span class="String">'</span><span class="String">add_two_ints_server</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-4"></span>    <span class="ID">s</span> = <span class="ID">rospy</span>.<span class="ID">Service</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>, <span class="ID">AddTwoInts</span>, <span class="ID">handle_add_two_ints</span>)</span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13-4"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">Ready to add two ints.</span><span class="String">"</span></span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14-4"></span>    <span class="ID">rospy</span>.<span class="ID">spin</span>()</span>
<span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15-4"></span></span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16-4"></span><span class="ResWord">if</span> <span class="ID">__name__</span> == <span class="String">"</span><span class="String">__main__</span><span class="String">"</span>:</span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-27047f5058d93f3c972525600be4e0b4132b06a5_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17-4"></span>    <span class="ID">add_two_ints_server</span>()</span>
</pre>

</div>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-65"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-66"></span>

Don't forget to make the node executable:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-67"></span>

*   <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-68"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-69"></span>

    <pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-10"></span>chmod +x scripts/add_two_ints_server.py</pre>

    <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-70"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-71"></span>

#### The Code Explained

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-72"></span>

Now, let's break the code down.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-73"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-74"></span>

There's very little to writing a service using [rospy](/rospy). We declare our node using <tt class="backtick">init_node()</tt> and then declare our service:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-75"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-76"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-5"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-4af5a2319367916304ba4d0dd6f697e4c2f5788c\', 12, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-4af5a2319367916304ba4d0dd6f697e4c2f5788c" lang="en"><span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-4af5a2319367916304ba4d0dd6f697e4c2f5788c_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-4af5a2319367916304ba4d0dd6f697e4c2f5788c_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-13"></span>    <span class="ID">s</span> = <span class="ID">rospy</span>.<span class="ID">Service</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>, <span class="ID">AddTwoInts</span>, <span class="ID">handle_add_two_ints</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-6"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-77"></span>This declares a new service named <tt class="backtick">add_two_ints</tt> with the <tt class="backtick">AddTwoInts</tt> service type. All requests are passed to <tt class="backtick">handle_add_two_ints</tt> function. <tt class="backtick">handle_add_two_ints</tt> is called with instances of <tt class="backtick">AddTwoIntsRequest</tt> and returns instances of <tt class="backtick">AddTwoIntsResponse</tt>.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-78"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-79"></span>

Just like with the subscriber example, <tt class="backtick">rospy.spin()</tt> keeps your code from exiting until the service is shutdown.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-80"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-81"></span>

### Writing the Client Node

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-82"></span>

#### The Code

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-83"></span>

Create the **scripts/add_two_ints_client.py** file within the beginner_tutorials package and paste the following inside it:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-84"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-85"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-86"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-87"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-88"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-89"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-90"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-91"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-92"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-93"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-94"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-95"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-96"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-97"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-98"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-99"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-100"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-101"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-102"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-103"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-104"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-105"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-106"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-107"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-108"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-109"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-110"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-111"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-112"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-113"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-114"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-14"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235" lang="en"><span class="line"><span class="LineNumber">[1](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_1)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_1"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-15"></span><span class="Comment">#!/usr/bin/env python</span></span>
<span class="line"><span class="LineNumber">[2](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_2)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_2"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-7"></span></span>
<span class="line"><span class="LineNumber">[3](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_3)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_3"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-7"></span><span class="ResWord">import</span> <span class="ID">sys</span></span>
<span class="line"><span class="LineNumber">[4](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_4)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_4"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-7"></span><span class="ResWord">import</span> <span class="ID">rospy</span></span>
<span class="line"><span class="LineNumber">[5](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_5)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_5"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-7"></span><span class="ResWord">from</span> <span class="ID">beginner_tutorials.srv</span> <span class="ResWord">import</span> *</span>
<span class="line"><span class="LineNumber">[6](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_6)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_6"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-6"></span></span>
<span class="line"><span class="LineNumber">[7](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_7)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-6"></span><span class="ResWord">def</span> <span class="ID">add_two_ints_client</span>(<span class="ID">x</span>, <span class="ID">y</span>):</span>
<span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-6"></span>    <span class="ID">rospy</span>.<span class="ID">wait_for_service</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>)</span>
<span class="line"><span class="LineNumber">[9](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_9)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-6"></span>    <span class="ResWord">try</span>:</span>
<span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-6"></span>        <span class="ID">add_two_ints</span> = <span class="ID">rospy</span>.<span class="ID">ServiceProxy</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>, <span class="ID">AddTwoInts</span>)</span>
<span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-6"></span>        <span class="ID">resp1</span> = <span class="ID">add_two_ints</span>(<span class="ID">x</span>, <span class="ID">y</span>)</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-12-6"></span>        <span class="ResWord">return</span> <span class="ID">resp1</span>.<span class="ID">sum</span></span>
<span class="line"><span class="LineNumber">[13](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_13)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-13-5"></span>    <span class="ResWord">except</span> <span class="ID">rospy</span>.<span class="ID">ServiceException</span>, <span class="ID">e</span>:</span>
<span class="line"><span class="LineNumber">[14](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_14)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-14-5"></span>        <span class="ResWord">print</span> <span class="String">"</span><span class="String">Service call failed:</span> <span class="String">%s</span><span class="String">"</span>%<span class="ID">e</span></span>
<span class="line"><span class="LineNumber">[15](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_15)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-15-5"></span></span>
<span class="line"><span class="LineNumber">[16](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_16)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-16-5"></span><span class="ResWord">def</span> <span class="ID">usage</span>():</span>
<span class="line"><span class="LineNumber">[17](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_17)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-17-5"></span>    <span class="ResWord">return</span> <span class="String">"</span><span class="String">%s</span> <span class="String">[x y]</span><span class="String">"</span>%<span class="ID">sys</span>.<span class="ID">argv</span>[<span class="Number">0</span>]</span>
<span class="line"><span class="LineNumber">[18](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_18)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-18-3"></span></span>
<span class="line"><span class="LineNumber">[19](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_19)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_19"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-19-3"></span><span class="ResWord">if</span> <span class="ID">__name__</span> == <span class="String">"</span><span class="String">__main__</span><span class="String">"</span>:</span>
<span class="line"><span class="LineNumber">[20](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_20)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-20-3"></span>    <span class="ResWord">if</span> <span class="ResWord">len</span>(<span class="ID">sys</span>.<span class="ID">argv</span>) == <span class="Number">3</span>:</span>
<span class="line"><span class="LineNumber">[21](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_21)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_21"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-21-1"></span>        <span class="ID">x</span> = <span class="ResWord">int</span>(<span class="ID">sys</span>.<span class="ID">argv</span>[<span class="Number">1</span>])</span>
<span class="line"><span class="LineNumber">[22](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_22)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_22"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-22-1"></span>        <span class="ID">y</span> = <span class="ResWord">int</span>(<span class="ID">sys</span>.<span class="ID">argv</span>[<span class="Number">2</span>])</span>
<span class="line"><span class="LineNumber">[23](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_23)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-23-1"></span>    <span class="ResWord">else</span>:</span>
<span class="line"><span class="LineNumber">[24](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_24)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_24"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-24-1"></span>        <span class="ResWord">print</span> <span class="ID">usage</span>()</span>
<span class="line"><span class="LineNumber">[25](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_25)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_25"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-25-1"></span>        <span class="ID">sys</span>.<span class="ID">exit</span>(<span class="Number">1</span>)</span>
<span class="line"><span class="LineNumber">[26](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_26)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_26"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-26-1"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">Requesting</span> <span class="String">%s</span><span class="String">+</span><span class="String">%s</span><span class="String">"</span>%(<span class="ID">x</span>, <span class="ID">y</span>)</span>
<span class="line"><span class="LineNumber">[27](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_27)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-369fedb1315e4507f4b59d2e3b2a137ae63ab235_27"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-27-1"></span>    <span class="ResWord">print</span> <span class="String">"</span><span class="String">%s</span> <span class="String">+</span> <span class="String">%s</span> <span class="String">=</span> <span class="String">%s</span><span class="String">"</span>%(<span class="ID">x</span>, <span class="ID">y</span>, <span class="ID">add_two_ints_client</span>(<span class="ID">x</span>, <span class="ID">y</span>))</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-115"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-116"></span>

Don't forget to make the node executable:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-117"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-118"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-119"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-16"></span>$ chmod +x scripts/add_two_ints_client.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-120"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-121"></span>

#### The Code Explained

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-122"></span>

Now, let's break the code down.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-123"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-124"></span>

The client code for calling services is also simple. For clients you don't have to call <tt class="backtick">init_node()</tt>. We first call:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-125"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-126"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-17"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-18"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-7"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-9230d01f45af4649ee54ce639f7c09dc5ba16698\', 8, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-9230d01f45af4649ee54ce639f7c09dc5ba16698" lang="en"><span class="line"><span class="LineNumber">[8](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-9230d01f45af4649ee54ce639f7c09dc5ba16698_8)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-9230d01f45af4649ee54ce639f7c09dc5ba16698_8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-19"></span>    <span class="ID">rospy</span>.<span class="ID">wait_for_service</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-9"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-127"></span>This is a convenience method that blocks until the service named <tt class="backtick">add_two_ints</tt> is available. Next we create a handle for calling the service:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-128"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-129"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-20"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-21"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-7"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-7"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b0b6cdf636d5aadc585acc35117f3e34dd9c4276\', 10, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b0b6cdf636d5aadc585acc35117f3e34dd9c4276" lang="en"><span class="line"><span class="LineNumber">[10](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b0b6cdf636d5aadc585acc35117f3e34dd9c4276_10)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b0b6cdf636d5aadc585acc35117f3e34dd9c4276_10"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-22"></span>        <span class="ID">add_two_ints</span> = <span class="ID">rospy</span>.<span class="ID">ServiceProxy</span>(<span class="String">'</span><span class="String">add_two_ints</span><span class="String">'</span>, <span class="ID">AddTwoInts</span>)</span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-11"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-130"></span>We can use this handle just like a normal function and call it:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-131"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-132"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-23"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-24"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-13"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-8-9"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-9-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-10-8"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-11-7"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb\', 11, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb" lang="en"><span class="line"><span class="LineNumber">[11](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb_11)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb_11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-25"></span>        <span class="ID">resp1</span> = <span class="ID">add_two_ints</span>(<span class="ID">x</span>, <span class="ID">y</span>)</span>
<span class="line"><span class="LineNumber">[12](#rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb_12)</span> <span class="LineAnchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.CA-b52e2d1fa20a2403ab030cc359489fe0daeb1cfb_12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-14"></span>        <span class="ResWord">return</span> <span class="ID">resp1</span>.<span class="ID">sum</span></span>
</pre>

</div>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-10"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-133"></span>Because we've declared the type of the service to be <tt class="backtick">AddTwoInts</tt>, it does the work of generating the <tt class="backtick">AddTwoIntsRequest</tt> object for you (you're free to pass in your own instead). The return value is an <tt class="backtick">AddTwoIntsResponse</tt> object. If the call fails, a <tt class="backtick">rospy.ServiceException</tt> may be thrown, so you should setup the appropriate <tt class="backtick">try/except</tt> block.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-134"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-135"></span>

### Building your nodes

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-136"></span>

We use CMake as our build system and, yes, you have to use it even for Python nodes. This is to make sure that the [autogenerated Python code for messages and services](http://www.ros.org/wiki/ROS/Tutorials/CreatingMsgAndSrv#Creating_a_srv) is created.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-137"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-138"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-139"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-140"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-141"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-142"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-143"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-144"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-145"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-146"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-26"></span>

We also use a Makefile for a bit of convenience. <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-15"></span><tt>roscreate-pkg</tt> automatically created a Makefile, so you don't have to edit it.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-14"></span>

Now run make:<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-14"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-11"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-10"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-27"></span>$ make</pre>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-147"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-148"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-149"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-150"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-151"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-152"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-153"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-154"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-155"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-156"></span>

<div class="buildsystem catkin"><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-28"></span>

Go to your catkin workspace and run <tt class="backtick">catkin_make</tt>.<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-16"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-15"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-4-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-5-15"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-6-12"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-7-11"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-29"></span># In your catkin workspace
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-17"></span>$ cd ~/catkin_ws
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-16"></span>$ catkin_make</pre>

</div>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-157"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-158"></span>

### Try it out!

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-159"></span>

In a **new terminal**, run<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-160"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-161"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-162"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-163"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-164"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-30"></span>$ cd ~/catkin_ws
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-18"></span>$ . devel/setup.bash
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-17"></span>$ rosrun beginner_tutorials add_two_ints_server.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-165"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-166"></span>

In a **new terminal**, run<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-167"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-168"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-169"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-170"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-171"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-31"></span>$ cd ~/catkin_ws
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-19"></span>$ . devel/setup.bash
<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-3-18"></span>$ rosrun beginner_tutorials add_two_ints_client.py</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-172"></span>

*   And you will see the usage information printed, similar to<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-173"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-174"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-175"></span>

    <pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-32"></span>/home/user/catkin_ws/src/beginner_tutorials/scripts/add_two_ints_client.py [x y]</pre>

    <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-176"></span>

Then run<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-177"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-178"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-179"></span>

<pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-33"></span>$ rosrun beginner_tutorials add_two_ints_client.py 4 5</pre>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-180"></span>

*   And you will get <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-181"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-182"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-183"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-184"></span>

    <pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-34"></span>Requesting 4+5
    <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-2-20"></span>4 + 5 = 9</pre>

    <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-185"></span>And the server will print out<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-186"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-187"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-188"></span>

    <pre><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-1-35"></span>Returning [4 + 5 = 9]</pre>

    <span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-189"></span><span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.line-190"></span>

<span class="anchor" id="rospy_tutorials.2BAC8-Tutorials.2BAC8-WritingServiceClient.bottom"></span></div>

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

Now that you have written a simple service and client, let's [examine the simple service and client](/ROS/Tutorials/ExaminingServiceClient).<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/WritingServiceClient(python) (last edited 2012-11-26 23:33:53 by <span title="William J. Woodall @ gw.willowgarage.com[70.35.54.194]">[WilliamWoodall](/WilliamWoodall "William J. Woodall @ gw.willowgarage.com[70.35.54.194]")</span>)
