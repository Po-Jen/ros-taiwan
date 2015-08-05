<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [BuildingPackages](/action/fullsearch/ROS/Tutorials/BuildingPackages?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FBuildingPackages%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [creating a ROS package](/ROS/Tutorials/CreatingPackage).</td>

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

## Building a ROS Package

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial covers the toolchain to build a package.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Understanding ROS Nodes](/ROS/Tutorials/UnderstandingNodes)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-2"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1"></span>

<div class="table-of-contents">

Contents

1.  [Building Packages](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.Building_Packages)
    1.  [Using rosmake](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.Using_rosmake)
    2.  [rosmake multiple packages](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.rosmake_multiple_packages)
2.  [Review](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.Review)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-3"></span>

### Building Packages

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-4"></span>

Once all the system dependencies are installed, we can build our package that we just created.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-6"></span>

#### Using rosmake

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-7"></span>

<tt class="backtick">rosmake</tt> is just like the <tt class="backtick">make</tt> command, but it does some special ROS magic. When you type <tt class="backtick">rosmake beginner_tutorials</tt>, it builds the <tt class="backtick">beginner_tutorials</tt> package, plus every package that it depends on, in the correct order. Since we listed rospy, roscpp, and std_msgs as dependencies when creating our ROS package, these packages (and their dependiencies, and so on) will be built by <tt class="backtick">rosmake</tt> as well.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-9"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-12"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1-1"></span>rosmake [package]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-14"></span>

Try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-16"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-17"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1-2"></span>$ rosmake beginner_tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-19"></span>

This previous command may take a while to finish. As it is running you should see some output like:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-20"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-21"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-24"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-26"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-29"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-31"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-32"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-34"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1-3"></span>[ rosmake ] No package specified.  Building ['beginner_tutorials']
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-2-1"></span>[ rosmake ] Logging to directory
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-3-1"></span>[ rosmake ] /home/dbking/.ros/rosmake_output-2009-09-22-03-17-14
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-4-1"></span>[ rosmake ] [ 0 of 18  Completed ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-5-1"></span>[rosmake-0] >>> genmsg_cpp >>> [ make ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-6-1"></span>[rosmake-0] <<< genmsg_cpp <<< [PASS] [ 0.39 seconds ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-7-1"></span>[ rosmake ] [ 1 of 18  Completed ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-8-1"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-9-1"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-10-1"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-11-1"></span>[ rosmake ] [ 17 of 18  Completed ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-12-1"></span>[rosmake-0] >>> beginner_tutorials >>> [ make ]
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-13-1"></span>[rosmake-0] <<< beginner_tutorials <<< [PASS] [ 0.79 seconds ]</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-35"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-36"></span>

On Fuerte, since dependencies are greatly reduced, this takes almost no time and produces:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-37"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-39"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-40"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-41"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-42"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-43"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-45"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-47"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-48"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-49"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-50"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-51"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-52"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-53"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-54"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-55"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-56"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-57"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-58"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-59"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-60"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-61"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1-4"></span>[ rosmake ] rosmake starting...                                                                     
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-2-2"></span>[ rosmake ] Packages requested are: ['beginner_tutorials']                                          
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-3-2"></span>[ rosmake ] Logging to directory /home/alex/.ros/rosmake/rosmake_output-20120603-082414             
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-4-2"></span>[ rosmake ] Expanded args ['beginner_tutorials'] to:
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-5-2"></span>['beginner_tutorials']                         
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-6-2"></span>[rosmake-0] Starting >>> std_msgs [ make ]                                                          
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-7-2"></span>[rosmake-1] Starting >>> roslang [ make ]                                                           
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-8-2"></span>[rosmake-0] Finished <<< std_msgs ROS_NOBUILD in package std_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-9-2"></span> No Makefile in package std_msgs  
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-10-2"></span>[rosmake-1] Finished <<< roslang ROS_NOBUILD in package roslang
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-11-2"></span> No Makefile in package roslang     
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-12-2"></span>[rosmake-1] Starting >>> rospy [ make ]                                                             
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-13-2"></span>[rosmake-2] Starting >>> roscpp [ make ]                                                            
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-14-1"></span>[rosmake-1] Finished <<< rospy ROS_NOBUILD in package rospy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-15-1"></span> No Makefile in package rospy           
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-16-1"></span>[rosmake-2] Finished <<< roscpp ROS_NOBUILD in package roscpp
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-17-1"></span> No Makefile in package roscpp        
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-18-1"></span>[rosmake-2] Starting >>> beginner_tutorials [ make ]                                                
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-19-1"></span>[rosmake-2] Finished <<< beginner_tutorials [PASS] [ 1.14 seconds ]                                 
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-20-1"></span>[ rosmake ] Results:                                                                                
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-21-1"></span>[ rosmake ] Built 5 packages with 0 failures.                                                       
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-22-1"></span>[ rosmake ] Summary output to directory                                                             
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-23-1"></span>[ rosmake ] /home/alex/.ros/rosmake/rosmake_output-20120603-082414  </pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-62"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-63"></span>

#### rosmake multiple packages

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-64"></span>

We can also use <tt class="backtick">rosmake</tt> to build multiple packages at once.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-65"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-66"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-67"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-68"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-69"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-1-5"></span>rosmake [package1] [package2] [package3]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-70"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-71"></span>

### Review

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-72"></span>

Lets just list some of the commands we've used so far:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-73"></span>

*   rosdep = ros+dep(endencies) : a tool to install package dependencies<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-74"></span>
*   rosmake = ros+make : makes (compiles) a ROS package<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.line-75"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-BuildingPackages.bottom"></span></div>

</div>

<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-3"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1"></span>

<div class="table-of-contents">

Contents

1.  [Building Packages](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.Building_Packages)
    1.  [Using catkin_make](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.Using_catkin_make)
    2.  [Building Your Package](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.Building_Your_Package)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3"></span>

### Building Packages

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-4"></span>

As long as all of the system dependencies of your package are installed, we can now build your new package.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-6"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-8"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-1"></span>

**Note:** If you installed ROS using <tt class="backtick">apt</tt> or some other package manager, you should already have all of your dependencies.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-10"></span>

Before continuing remember to source your environment setup file if you have not already. On Ubuntu it would be something like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-12"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-14"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-15"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-2"></span>$ source /opt/ros/%YOUR_ROS_DISTRO%/setup.bash
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-1"></span>$ source /opt/ros/groovy/setup.bash             (For Groovy for instance) </pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-16"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-17"></span>

#### Using catkin_make

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-19"></span>

[catkin_make](/catkin/commands/catkin_make) is a command line tool which adds some convenience to the standard catkin workflow. You can imagine that [catkin_make](/catkin/commands/catkin_make) combines the calls to <tt class="backtick">cmake</tt> and <tt class="backtick">make</tt> in the standard CMake workflow.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-20"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-21"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-24"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-26"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-27"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-3"></span># In a catkin workspace
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-2"></span>$ catkin_make [make_targets] [-DCMAKE_VARIABLES=...]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-29"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-30"></span>

For people who are unfamiliar with the standard CMake workflow, it breaks down as follows:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-31"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-32"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-34"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-4"></span>

**Note:** If you run the below commands it will not work, as this is just an example of how CMake generally works.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-35"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-36"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-37"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-39"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-40"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-41"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-42"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-43"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-5"></span># In a CMake project
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-3"></span>$ mkdir build
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3-1"></span>$ cd build
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-4-1"></span>$ cmake ..
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-5-1"></span>$ make
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-6-1"></span>$ make install  # (optionally)</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-45"></span>

This process is run for each CMake project. In contrast catkin projects can be built together in workspaces. Building zero to many catkin packages in a workspace follows this work flow:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-47"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-48"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-49"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-50"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-51"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-6"></span># In a catkin workspace
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-4"></span>$ catkin_make
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3-2"></span>$ catkin_make install  # (optionally)</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-52"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-53"></span>

The above commands will build any catkin projects found in the <tt class="backtick">src</tt> folder. This follows the recommendations set by [REP128](http://ros.org/reps/rep-0128.html). If your source code is in a different place, say <tt class="backtick">my_src</tt> then you would call catkin_make like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-54"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-55"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-56"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-57"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-7"></span>

**Note:** If you run the below commands it will not work, as the directory <tt class="backtick">my_src</tt> does not exist.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-58"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-59"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-60"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-61"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-62"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-63"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-8"></span># In a catkin workspace
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-5"></span>$ catkin_make --source my_src
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3-3"></span>$ catkin_make install --source my_src  # (optionally)</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-64"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-65"></span>

For more advanced uses of [catkin_make](/catkin/commands/catkin_make) see the documentation: [catkin/commands/catkin_make](/catkin/commands/catkin_make)<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-66"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-67"></span>

#### Building Your Package

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-68"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-69"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-70"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-9"></span>

For readers of this page who are about to build your own codes, please also take a look at later tutorial [(C++)](/ROS/Tutorials/WritingPublisherSubscriber%28c%2B%2B%29)/[(Python)](/ROS/Tutorials/WritingPublisherSubscriber%28python%29) since you may need to modify <tt class="backtick">CMakeLists.txt</tt>.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-71"></span>

You should already have a [catkin workspace](/catkin/Tutorials/create_a_workspace) and a new catkin package called <tt class="backtick">beginner_tutorials</tt> from the previous tutorial, [Creating a Package](/ROS/Tutorials/CreatingPackage). Go into the catkin workspace if you are not already there and look in the <tt class="backtick">src</tt> folder:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-72"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-73"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-74"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-75"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-76"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-10"></span>$ cd ~/catkin_ws/
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-6"></span>$ ls src</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-77"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-78"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-79"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-11"></span>beginner_tutorials/  CMakeLists.txt@  </pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-80"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-81"></span>

You should see that there is a folder called <tt class="backtick">beginner_tutorials</tt> which you created with [catkin_create_pkg](/catkin/commands/catkin_create_pkg) in the previous tutorial. We can now build that package using [catkin_make](/catkin/commands/catkin_make):<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-82"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-83"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-84"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-85"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-12"></span>$ catkin_make</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-86"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-87"></span>

You should see a lot of output from <tt class="backtick">cmake</tt> and them <tt class="backtick">make</tt>, which should be similar to this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-88"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-89"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-90"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-91"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-92"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-93"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-94"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-95"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-96"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-97"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-98"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-99"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-100"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-101"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-102"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-103"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-104"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-105"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-106"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-107"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-108"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-109"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-110"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-111"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-112"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-113"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-114"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-115"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-116"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-117"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-118"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-119"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-120"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-121"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-122"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-123"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-124"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-125"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-126"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-127"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-128"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-129"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-130"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-131"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-132"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-133"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-13"></span>Base path: /home/user/catkin_ws
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-7"></span>Source space: /home/user/catkin_ws/src
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3-4"></span>Build space: /home/user/catkin_ws/build
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-4-2"></span>Devel space: /home/user/catkin_ws/devel
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-5-2"></span>Install space: /home/user/catkin_ws/install
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-6-2"></span>####
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-7-1"></span>#### Running command: "cmake /home/user/catkin_ws/src
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-8-1"></span>-DCATKIN_DEVEL_PREFIX=/home/user/catkin_ws/devel
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-9-1"></span>-DCMAKE_INSTALL_PREFIX=/home/user/catkin_ws/install" in "/home/user/catkin_ws/build"
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-10-1"></span>####
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-11-1"></span>-- The C compiler identification is GNU 4.2.1
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-12-1"></span>-- The CXX compiler identification is Clang 4.0.0
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-13-1"></span>-- Checking whether C compiler has -isysroot
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-14-1"></span>-- Checking whether C compiler has -isysroot - yes
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-15-1"></span>-- Checking whether C compiler supports OSX deployment target flag
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-16-1"></span>-- Checking whether C compiler supports OSX deployment target flag - yes
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-17-1"></span>-- Check for working C compiler: /usr/bin/gcc
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-18-1"></span>-- Check for working C compiler: /usr/bin/gcc -- works
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-19-1"></span>-- Detecting C compiler ABI info
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-20-1"></span>-- Detecting C compiler ABI info - done
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-21-1"></span>-- Check for working CXX compiler: /usr/bin/c++
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-22-1"></span>-- Check for working CXX compiler: /usr/bin/c++ -- works
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-23-1"></span>-- Detecting CXX compiler ABI info
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-24-1"></span>-- Detecting CXX compiler ABI info - done
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-25-1"></span>-- Using CATKIN_DEVEL_PREFIX: /tmp/catkin_ws/devel
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-26-1"></span>-- Using CMAKE_PREFIX_PATH: /opt/ros/groovy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-27-1"></span>-- This workspace overlays: /opt/ros/groovy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-28-1"></span>-- Found PythonInterp: /usr/bin/python (found version "2.7.1") 
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-29-1"></span>-- Found PY_em: /usr/lib/python2.7/dist-packages/em.pyc
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-30-1"></span>-- Found gtest: gtests will be built
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-31-1"></span>-- catkin 0.5.51
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-32-1"></span>-- BUILD_SHARED_LIBS is on
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-33-1"></span>-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-34-1"></span>-- ~~  traversing packages in topological order:
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-35-1"></span>-- ~~  - beginner_tutorials
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-36-1"></span>-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-37-1"></span>-- +++ add_subdirectory(beginner_tutorials)
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-38-1"></span>-- Configuring done
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-39-1"></span>-- Generating done
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-40-1"></span>-- Build files have been written to: /home/user/catkin_ws/build
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-41-1"></span>####
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-42-1"></span>#### Running command: "make -j4" in "/home/user/catkin_ws/build"
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-43-1"></span>####</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-134"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-135"></span>

Note that [catkin_make](/catkin/commands/catkin_make) first displays what paths it is using for each of the 'spaces'. The spaces are described in the [REP128](http://ros.org/reps/rep-0128.html) and by documentation about catkin workspaces on the wiki: [catkin/workspaces](/catkin/workspaces). The important thing to notice is that because of these default values several folders have been created in your catkin workspace. Take a look with <tt class="backtick">ls</tt>:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-136"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-137"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-138"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-139"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-14"></span>$ ls</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-140"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-141"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-142"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-143"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-144"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-1-15"></span>build
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-2-8"></span>devel
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-3-5"></span>src</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-145"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-146"></span>

The <tt class="backtick">build</tt> folder is the default location of the [build space](/catkin/workspaces#Build_Space) and is where <tt class="backtick">cmake</tt> and <tt class="backtick">make</tt> are called to configure and build your packages. The <tt class="backtick">devel</tt> folder is the default location of the [devel space](/catkin/workspaces#Development_.28Devel.29_Space), which is where your executables and libraries go before you install your packages.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.line-147"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-BuildingPackages.bottom"></span>

</div>

</div>

<span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

Now that you have built your ROS package let's talk more about [ROS Nodes](/ROS/Tutorials/UnderstandingNodes).<span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span>

<span class="anchor" id="line-39"></span>

<span class="anchor" id="line-40"></span>

<span class="anchor" id="line-41"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/BuildingPackages (last edited 2012-12-24 23:17:03 by <span title="130s @ gw.willowgarage.com[70.35.54.194]">[IsaacSaito](/IsaacSaito "130s @ gw.willowgarage.com[70.35.54.194]")</span>)
