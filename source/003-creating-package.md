<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [CreatingPackage](/action/fullsearch/ROS/Tutorials/CreatingPackage?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FCreatingPackage%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [navigating the ROS filesystem](/ROS/Tutorials/NavigatingTheFilesystem).</td>

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

## Creating a ROS Package

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial covers using [roscreate-pkg](/roscreate) or [catkin](/catkin) to create a new package, and [rospack](/rospack) to list package dependencies.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Building a ROS package](/ROS/Tutorials/BuildingPackages)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-2"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1"></span>

<div class="table-of-contents">

Contents

1.  [Using roscreate](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.Using_roscreate)
2.  [Creating a New ROS Package](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.Creating_a_New_ROS_Package)
3.  [First-order package dependencies](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.First-order_package_dependencies)
4.  [Indirect package dependencies](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.Indirect_package_dependencies)
5.  [ROS Client Libraries](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.ROS_Client_Libraries)
6.  [Review](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.Review)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3"></span>

### Using roscreate

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-4"></span>

Before we create a package, let's see how the <tt class="backtick">roscreate-pkg</tt> command-line tool works. This creates a new ROS [package](/Packages). All ROS packages consist of the many similar files : [manifests](/Manifest), [CMakeLists.txt](/CMakeLists), mainpage.dox, and Makefiles. roscreate-pkg eliminates many tedious tasks of creating a new package by hand, and eliminates common errors caused by hand-typing build files and manifests.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-6"></span>

To create a new package in the current directory:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-8"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-10"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-1"></span># roscreate-pkg [package_name]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-12"></span>

You can also specify dependencies of that package:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-14"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-16"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-2"></span># roscreate-pkg [package_name] [depend1] [depend2] [depend3]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-18"></span>

### Creating a New ROS Package

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-19"></span>

Now we're going to go into your home or project directory and create our <tt>beginner_tutorials</tt> package. We are going to make it depend on [std_msgs](/std_msgs), [roscpp](/roscpp), and [rospy](/rospy), which are common ROS packages.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-20"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-21"></span>

Now go into the ~/fuerte_workspace/sandbox directory:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-24"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-3"></span>$ cd ~/fuerte_workspace/sandbox</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-25"></span>

Alternatively, if you use Fuerte or later release, you can simply do:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-26"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-29"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-4"></span>$ roscd
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-1"></span>$ cd sandbox</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-31"></span>

Then create your package:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-32"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-34"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-5"></span>$ roscreate-pkg beginner_tutorials std_msgs rospy roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-35"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-36"></span>

You will see something similar to:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-37"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-39"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-40"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-41"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-42"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-43"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-45"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-47"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-48"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-49"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-6"></span>Creating package directory ~/fuerte_workspace/sandbox/beginner_tutorials
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-2"></span>Creating include directory ~/fuerte_workspace/sandbox/beginner_tutorials/include/beginner_tutorials
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3-1"></span>Creating cpp source directory ~/ros/ros_tutorials/beginner_tutorials/src
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-4-1"></span>Creating python source directory ~/fuerte_workspace/sandbox/beginner_tutorials/src/beginner_tutorials
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-5-1"></span>Creating package file ~/fuerte_workspace/sandbox/beginner_tutorials/Makefile
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-6-1"></span>Creating package file ~/fuerte_workspace/sandbox/beginner_tutorials/manifest.xml
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-7-1"></span>Creating package file ~/fuerte_workspace/sandbox/beginner_tutorials/CMakeLists.txt
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-8-1"></span>Creating package file ~/fuerte_workspace/sandbox/beginner_tutorials/mainpage.dox
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-9-1"></span>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-10-1"></span>Please edit beginner_tutorials/manifest.xml and mainpage.dox to finish creating your package</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-50"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-51"></span>

You're going to want to spend some time looking at <tt class="backtick">beginner_tutorials/manifest.xml</tt>. [manifests](/Manifest) play an important role in ROS as they define how Packages are built, run, and documented.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-52"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-53"></span>

Now lets make sure that ROS can find your new package. It is often useful to call _rospack profile_ after making changes to your path so that new directories will be found:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-54"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-55"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-56"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-57"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-58"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-7"></span>$ rospack profile
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-3"></span>$ rospack find beginner_tutorials </pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-59"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-60"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-61"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-8"></span>YOUR_PACKAGE_PATH/beginner_tutorials</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-62"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-63"></span>

If this fails, it means ROS can't find your new package, which may be an issue with your <tt class="backtick">ROS_PACKAGE_PATH</tt>. Please consult the installation instructions for setup from SVN or from binaries, depending how you installed ROS. If you've created or added a package that's outside of the existing package paths, you will need to amend your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) environment variable to include that new location. Try re-sourcing your setup.sh in your fuerte_workspace.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-64"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-65"></span>

Try moving to the directory for the package.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-66"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-67"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-68"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-69"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-9"></span>$ roscd beginner_tutorials 
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-4"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-70"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-71"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-72"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-10"></span>YOUR_PACKAGE_PATH/beginner_tutorials</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-73"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-74"></span>

### First-order package dependencies

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-75"></span>

When using <tt>roscreate-pkg</tt> earlier, a few package dependencies were provided. <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-76"></span>These **first-order** dependencies can now be reviewed with the <tt>rospack</tt> tool.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-77"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-78"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-79"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-80"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-11"></span>

(Jan 9, 2013) There is [a bug](https://github.com/ros/rospack/issues/4) reported and already fixed in [rospack](/rospack) in <tt class="backtick">groovy</tt>; it may take some time to be reflected in the packages. If you see [an issue similar to this](http://answers.ros.org/question/51555/beginner-tutorials-segmentation-fault-with-rospack-depends1/?comment=51762#comment-51762) with the next command, you can skip to the following command.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-81"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-82"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-83"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-84"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-12"></span>$ rospack depends1 beginner_tutorials </pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-85"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-86"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-87"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-88"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-89"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-13"></span>std_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-5"></span>rospy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3-2"></span>roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-90"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-91"></span>

As you can see, <tt>rospack</tt> lists the same dependencies that were used as arguments when running <tt>roscreate-pkg</tt>. <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-92"></span>These dependencies for a package are stored in the **manifest** file. Take a look at the manifest file.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-93"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-94"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-95"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-96"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-97"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-14"></span>$ roscd beginner_tutorials
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-6"></span>$ cat manifest.xml</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-98"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-99"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-100"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-101"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-102"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-103"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-104"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-105"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-106"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-107"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-108"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-15"></span><package>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-7"></span>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3-3"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-4-2"></span>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-5-2"></span>  <depend package="std_msgs"/>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-6-2"></span>  <depend package="rospy"/>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-7-2"></span>  <depend package="roscpp"/>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-8-2"></span>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-9-2"></span></package></pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-109"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-110"></span>

### Indirect package dependencies

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-111"></span>

In many cases, a dependency will also have its own dependencies. For instance, <tt class="backtick">rospy</tt> has other dependencies.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-112"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-113"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-114"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-115"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-16"></span>

(Jan 9, 2013) There is [a bug](https://github.com/ros/rospack/issues/4) reported and already fixed in [rospack](/rospack) in <tt class="backtick">groovy</tt>; it may take some time to be reflected in the packages. If you see [an issue similar to this](http://answers.ros.org/question/51555/beginner-tutorials-segmentation-fault-with-rospack-depends1/?comment=51762#comment-51762) with the next command, you can skip to the following command.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-116"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-117"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-118"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-119"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-17"></span>$ rospack depends1 rospy</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-120"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-121"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-122"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-123"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-18"></span>roslib
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-8"></span>roslang</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-124"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-125"></span>

A package can have quite a few indirect dependencies. Luckily <tt>rospack</tt> can recursively determine all nested dependencies.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-126"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-127"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-128"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-19"></span>$ rospack depends beginner_tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-129"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-130"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-131"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-132"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-133"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-134"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-135"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-136"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-137"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-138"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-139"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-140"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-141"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-142"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-143"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-144"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-20"></span>rospack
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-9"></span>roslib
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3-4"></span>std_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-4-3"></span>rosgraph_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-5-3"></span>rosbuild
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-6-3"></span>roslang
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-7-3"></span>rospy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-8-3"></span>cpp_common
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-9-3"></span>roscpp_traits
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-10-2"></span>rostime
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-11-1"></span>roscpp_serialization
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-12-1"></span>xmlrpcpp
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-13-1"></span>rosconsole
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-14-1"></span>roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-145"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-146"></span>

Note: in Fuerte, the list is much shorter:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-147"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-148"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-149"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-150"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-151"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-152"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-1-21"></span>std_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-2-10"></span>roslang
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-3-5"></span>rospy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-4-4"></span>roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-153"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-154"></span>

### ROS Client Libraries

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-155"></span>

You may be wondering what <tt>rospy</tt> and <tt>roscpp</tt> dependencies are from the previous examples. <tt>rospy</tt> and <tt>roscpp</tt> are [Client Libraries](/Client%20Libraries). The client libraries allow different programming languages to communicate through ROS. <tt>rospy</tt> is the client library for Python. <tt>roscpp</tt> is the client library for C++.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-156"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-157"></span>

### Review

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-158"></span>

Lets just list some of the commands we've used so far:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-159"></span>

*   roscreate-pkg = ros+create-pkg : generates all the files needed to create a ROS package<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-160"></span>
*   rospack = ros+pack(age) : provides information related to ROS packages<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-161"></span>
*   rosstack = ros+stack : provides information related to ROS stacks<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.line-162"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreatingPackage.bottom"></span></div>

</div>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-3"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1"></span>

<div class="table-of-contents">

Contents

1.  [What makes up a catkin Package?](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.What_makes_up_a_catkin_Package.3F)
2.  [Packages in a catkin Workspace](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Packages_in_a_catkin_Workspace)
3.  [Creating a catkin Package](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Creating_a_catkin_Package)
4.  [Building a catkin workspace and sourcing the setup file](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Building_a_catkin_workspace_and_sourcing_the_setup_file)
5.  [package dependencies](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.package_dependencies)
    1.  [First-order dependencies](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.First-order_dependencies)
    2.  [Indirect dependencies](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Indirect_dependencies)
6.  [Customizing Your Package](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Customizing_Your_Package)
    1.  [Customizing the package.xml](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Customizing_the_package.xml)
        1.  [description tag](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.description_tag)
        2.  [maintainer tags](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.maintainer_tags)
        3.  [license tags](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.license_tags)
        4.  [dependencies tags](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.dependencies_tags)
        5.  [Final package.xml](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Final_package.xml)
    2.  [Customizing the CMakeLists.txt](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Customizing_the_CMakeLists.txt)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3"></span>

## What makes up a catkin Package?

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4"></span>

For a package to be considered a catkin package it must meet a few requirements:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5"></span>

*   The package must contain a [catkin compliant package.xml](/catkin/package.xml) file<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6"></span>

    *   That package.xml file provides meta information about the package<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7"></span>
*   The package must contain a [CMakeLists.txt which uses catkin](/catkin/CMakeLists.txt). [Catkin metapackages](/catkin/package.xml#Metapackages) must have a boilerplate CMakeLists.txt file.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8"></span>

*   There can be no more than one package in each folder<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9"></span>
    *   This means no nested packages nor multiple packages sharing the same directory<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-11"></span>

The simplest possible package might look like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-13"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-14"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-16"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-17"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-1"></span>my_package/
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-1"></span>  CMakeLists.txt
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-1"></span>  package.xml</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-19"></span>

## Packages in a catkin Workspace

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-20"></span>

The recommended method of working with catkin packages is using a [catkin workspace](/catkin/workspaces), but you can also build catkin packages [standalone](/catkin/build_standalone). A trivial workspace might look like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-21"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-22"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-24"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-26"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-29"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-31"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-32"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-33"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-2"></span>workspace_folder/        -- WORKSPACE
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-2"></span>  src/                   -- SOURCE SPACE
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-2"></span>    CMakeLists.txt       -- 'Toplevel' CMake file, provided by catkin
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-1"></span>    package_1/
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-1"></span>      CMakeLists.txt     -- CMakeLists.txt file for package_1
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-1"></span>      package.xml        -- Package manifest for package_1
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-1"></span>    ...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-1"></span>    package_n/
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-1"></span>      CMakeLists.txt     -- CMakeLists.txt file for package_n
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10-1"></span>      package.xml        -- Package manifest for package_n</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-34"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-35"></span>

Before continuing with this tutorial create an empty catkin workspace by following the [Creating a workspace for catkin](/catkin/Tutorials/create_a_workspace) tutorial.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-36"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-37"></span>

## Creating a catkin Package

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-39"></span>

This tutorial will demonstrate how to use the [catkin_create_pkg](/catkin/commands/catkin_create_pkg) script to create a new catkin package, and what you can do with it after it has been created.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-40"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-41"></span>

First change to the source space directory of the catkin workspace you created in the [Creating a Workspace for catkin tutorial](/catkin/Tutorials/create_a_workspace):<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-42"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-43"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-45"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-46"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-3"></span># You should have created this in the Creating a Workspace Tutorial
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-3"></span>$ cd ~/catkin_ws/src</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-47"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-48"></span>

Now use the <tt class="backtick">catkin_create_pkg</tt> script to create a new package called 'beginner_tutorials' which depends on std_msgs, roscpp, and rospy:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-49"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-50"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-51"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-52"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-4"></span>$ catkin_create_pkg beginner_tutorials std_msgs rospy roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-53"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-54"></span>

This will create a <tt class="backtick">beginner_tutorials</tt> folder which contains a [package.xml](/catkin/package.xml) and a [CMakeLists.txt](/catkin/CMakeLists.txt), which have been partially filled out with the information you gave <tt class="backtick">catkin_create_pkg</tt>.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-55"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-56"></span>

<tt class="backtick">catkin_create_pkg</tt> requires that you give it a <tt class="backtick">package_name</tt> and optionally a list of dependencies on which that package depends:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-57"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-58"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-59"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-60"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-61"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-5"></span># This is an example, do not try to run this
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-4"></span># catkin_create_pkg <package_name> [depend1] [depend2] [depend3]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-62"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-63"></span>

<tt class="backtick">catkin_create_pkg</tt> also has more advanced functionalities which is described in [catkin/commands/catkin_create_pkg](/catkin/commands/catkin_create_pkg).<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-64"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-65"></span>

## Building a catkin workspace and sourcing the setup file

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-66"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-67"></span>

Now you need to build the packages in the catkin workspace:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-68"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-69"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-70"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-71"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-72"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-6"></span>$ cd ~/catkin_ws
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-5"></span>$ catkin_make</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-73"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-74"></span>

After the workspace has been built it has created a similar structure in the <tt class="backtick">devel</tt> subfolder as you usually find under <tt class="backtick">/opt/ros/$ROSDISTRO_NAME</tt>.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-75"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-76"></span>

To add the workspace to your ROS environment you need to source the generated setup file:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-77"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-78"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-79"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-80"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-7"></span>$ . ~/catkin_ws/devel/setup.bash</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-81"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-82"></span>

## package dependencies

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-83"></span>

### First-order dependencies

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-84"></span>

When using [catkin_create_pkg](/catkin/commands/catkin_create_pkg) earlier, a few package dependencies were provided. <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-85"></span>These **first-order** dependencies can now be reviewed with the <tt>rospack</tt> tool.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-86"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-87"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-88"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-89"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-8"></span>

(Jan 9, 2013) There is [a bug](https://github.com/ros/rospack/issues/4) reported and already fixed in [rospack](/rospack) in <tt class="backtick">groovy</tt>, which takes sometime until the change gets reflected on your computer. If you see [a similar issue like this](http://answers.ros.org/question/51555/beginner-tutorials-segmentation-fault-with-rospack-depends1/?comment=51762#comment-51762) with the next command, you can skip to the next command.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-90"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-91"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-92"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-93"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-9"></span>$ rospack depends1 beginner_tutorials </pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-94"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-95"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-96"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-97"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-98"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-10"></span>std_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-6"></span>rospy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-3"></span>roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-99"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-100"></span>

As you can see, <tt>rospack</tt> lists the same dependencies that were used as arguments when running <tt>catkin_create_pkg</tt>. <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-101"></span>These dependencies for a package are stored in the **package.xml** file:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-102"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-103"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-104"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-105"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-106"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-11"></span>$ roscd beginner_tutorials
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-7"></span>$ cat package.xml</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-107"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-108"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-109"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-110"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-111"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-112"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-113"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-114"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-115"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-116"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-12"></span><package>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-8"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-4"></span>  <buildtool_depend>catkin</buildtool_depend>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-2"></span>  <build_depend>roscpp</build_depend>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-2"></span>  <build_depend>rospy</build_depend>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-2"></span>  <build_depend>std_msgs</build_depend>
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-2"></span>...
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-2"></span></package></pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-117"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-118"></span>

### Indirect dependencies

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-119"></span>

In many cases, a dependency will also have its own dependencies. For instance, <tt class="backtick">rospy</tt> has other dependencies.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-120"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-121"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-122"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-123"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-13"></span>

(Jan 9, 2013) There is [a bug](https://github.com/ros/rospack/issues/4) reported and already fixed in [rospack](/rospack) in <tt class="backtick">groovy</tt>, which takes sometime until the change gets reflected on your computer. If you see [a similar issue like this](http://answers.ros.org/question/51555/beginner-tutorials-segmentation-fault-with-rospack-depends1/?comment=51762#comment-51762) with the next command, you can skip to the next command.

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-124"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-125"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-126"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-127"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-14"></span>$ rospack depends1 rospy</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-128"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-129"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-130"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-131"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-132"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-133"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-134"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-15"></span>genpy
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-9"></span>rosgraph
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-5"></span>rosgraph_msgs
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-3"></span>roslib
    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-3"></span>std_msgs</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-135"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-136"></span>

A package can have quite a few indirect dependencies. Luckily <tt>rospack</tt> can recursively determine all nested dependencies.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-137"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-138"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-139"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-140"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-141"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-142"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-143"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-144"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-145"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-146"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-147"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-148"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-149"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-150"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-151"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-152"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-153"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-154"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-155"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-156"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-16"></span>$ rospack depends beginner_tutorials
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-10"></span>cpp_common
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-6"></span>rostime
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-4"></span>roscpp_traits
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-4"></span>roscpp_serialization
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-3"></span>genmsg
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-3"></span>genpy
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-3"></span>message_runtime
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-2"></span>rosconsole
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10-2"></span>std_msgs
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-11-1"></span>rosgraph_msgs
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-12-1"></span>xmlrpcpp
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-13-1"></span>roscpp
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-14-1"></span>rosgraph
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-15-1"></span>catkin
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-16-1"></span>rospack
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-17-1"></span>roslib
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-18-1"></span>rospy</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-157"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-158"></span>

## Customizing Your Package

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-159"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-160"></span>

This part of the tutorial will look at each file generated by [catkin_create_pkg](/catkin/commands/catkin_create_pkg) and describe, line by line, each component of those files and how you can customize them for your package.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-161"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-162"></span>

### Customizing the package.xml

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-163"></span>

The generated [package.xml](/catkin/package.xml) should be in your new package. Now lets go through the new [package.xml](/catkin/package.xml) and touch up any elements that need your attention.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-164"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-165"></span>

#### description tag

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-166"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-167"></span>

First update the description tag:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-168"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-169"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-5"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-fb97e97d8b791b4f6b911c62d34fe5604a07675c\', 5, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-fb97e97d8b791b4f6b911c62d34fe5604a07675c" lang="en"><span class="line"><span class="LineNumber">[5](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-fb97e97d8b791b4f6b911c62d34fe5604a07675c_5)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-fb97e97d8b791b4f6b911c62d34fe5604a07675c_5"></span>  <description>The beginner_tutorials package</description></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-4"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-170"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-171"></span>

Change the description to anything you like, but by convention the first sentence should be short while covering the scope of the package. If it is hard to describe the package in a single sentence then it might need to be broken up.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-172"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-173"></span>

#### maintainer tags

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-174"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-175"></span>

Next comes the maintainer tag:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-176"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-177"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-4"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2\', 7, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2" lang="en"><span class="line"><span class="LineNumber">[7](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_7)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_7"></span>  <!-- One maintainer tag required, multiple allowed, one person per tag --></span> 
<span class="line"><span class="LineNumber">[8](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_8)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_8"></span>  <!-- Example:  --></span>
<span class="line"><span class="LineNumber">[9](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_9)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_9"></span>  <!-- <maintainer email="jane.doe@example.com">Jane Doe</maintainer> --></span>
<span class="line"><span class="LineNumber">[10](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_10)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-2f2f1839d8bd274cd8f99fd961a225fe80fcc1d2_10"></span>  <maintainer email="user@todo.todo">user</maintainer></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-3"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-178"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-179"></span>

This is a required and important tag for the [package.xml](/catkin/package.xml) because it lets others know who to contact about the package. At least one maintainer is required, but you can have many if you like. The name of the maintainer goes into the body of the tag, but there is also an email attribute that should be filled out:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-180"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-181"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-19"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-7"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-30d7f8b2d6d329b74df4869bade8fdfa316bb17c\', 7, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-30d7f8b2d6d329b74df4869bade8fdfa316bb17c" lang="en"><span class="line"><span class="LineNumber">[7](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-30d7f8b2d6d329b74df4869bade8fdfa316bb17c_7)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-30d7f8b2d6d329b74df4869bade8fdfa316bb17c_7"></span>  <maintainer email="you@yourdomain.tld">Your Name</maintainer></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-6"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-182"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-183"></span>

#### license tags

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-184"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-185"></span>

Next is the license tag, which is also required:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-186"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-187"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-20"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-14"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-5"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf\', 12, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf" lang="en"><span class="line"><span class="LineNumber">[12](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_12)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_12"></span>  <!-- One license tag required, multiple allowed, one license per tag --></span>
<span class="line"><span class="LineNumber">[13](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_13)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_13"></span>  <!-- Commonly used license strings: --></span>
<span class="line"><span class="LineNumber">[14](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_14)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_14"></span>  <!--   BSD, MIT, Boost Software License, GPLv2, GPLv3, LGPLv2.1, LGPLv3 --></span>
<span class="line"><span class="LineNumber">[15](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_15)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-0e6145b2e070238d1afa432d8b9a6a2e65d073cf_15"></span>  <license>TODO</license></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-4"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-188"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-189"></span>

You should choose a license and fill it in here. Some common open source licenses are BSD, MIT, Boost Software License, GPLv2, GPLv3, LGPLv2.1, and LGPLv3\. You can read about several of these at the [Open Source Initiative](http://opensource.org/licenses/alphabetical). For this tutorial we'll use the BSD license because the rest of the core ROS components use it already:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-190"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-191"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-21"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-9"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-c2f485d5ba9efdc616470c2d71df9cf14a55e882\', 8, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-c2f485d5ba9efdc616470c2d71df9cf14a55e882" lang="en"><span class="line"><span class="LineNumber">[8](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-c2f485d5ba9efdc616470c2d71df9cf14a55e882_8)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-c2f485d5ba9efdc616470c2d71df9cf14a55e882_8"></span>  <license>BSD</license></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-8"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-192"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-193"></span>

#### dependencies tags

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-194"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-195"></span>

The next set of tags describe the dependencies of your package. The dependencies are split into <tt class="backtick">build_depend</tt>, <tt class="backtick">buildtool_depend</tt>, <tt class="backtick">run_depend</tt>, <tt class="backtick">test_depend</tt>. For a more detailed explination of these tags see the documentation about [Catkin Dependencies](/catkin/package.xml#Build.2C_Run.2C_and_Test_Dependencies). Since we passed <tt class="backtick">std_msgs</tt>, <tt class="backtick">roscpp</tt>, and <tt class="backtick">rospy</tt> as arguments to [catkin_create_pkg](/catkin/commands/catkin_create_pkg), the dependencies will look like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-196"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-197"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-16"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-11-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-12-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-13-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-14-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-15-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-16-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-17-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-18-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-19-1"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd\', 27, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd" lang="en"><span class="line"><span class="LineNumber">[27](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_27)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_27"></span>  <!-- The *_depend tags are used to specify dependencies --></span>
<span class="line"><span class="LineNumber">[28](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_28)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_28"></span>  <!-- Dependencies can be catkin packages or system dependencies --></span>
<span class="line"><span class="LineNumber">[29](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_29)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_29"></span>  <!-- Examples: --></span>
<span class="line"><span class="LineNumber">[30](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_30)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_30"></span>  <!-- Use build_depend for packages you need at compile time: --></span>
<span class="line"><span class="LineNumber">[31](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_31)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_31"></span>  <!--   <build_depend>genmsg</build_depend> --></span>
<span class="line"><span class="LineNumber">[32](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_32)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_32"></span>  <!-- Use buildtool_depend for build tool packages: --></span>
<span class="line"><span class="LineNumber">[33](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_33)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_33"></span>  <!--   <buildtool_depend>catkin</buildtool_depend> --></span>
<span class="line"><span class="LineNumber">[34](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_34)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_34"></span>  <!-- Use run_depend for packages you need at runtime: --></span>
<span class="line"><span class="LineNumber">[35](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_35)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_35"></span>  <!--   <run_depend>python-yaml</run_depend> --></span>
<span class="line"><span class="LineNumber">[36](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_36)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_36"></span>  <!-- Use test_depend for packages you need only for testing: --></span>
<span class="line"><span class="LineNumber">[37](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_37)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_37"></span>  <!--   <test_depend>gtest</test_depend> --></span>
<span class="line"><span class="LineNumber">[38](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_38)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_38"></span>  <buildtool_depend>catkin</buildtool_depend></span>
<span class="line"><span class="LineNumber">[39](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_39)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_39"></span>  <build_depend>roscpp</build_depend></span>
<span class="line"><span class="LineNumber">[40](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_40)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_40"></span>  <build_depend>rospy</build_depend></span>
<span class="line"><span class="LineNumber">[41](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_41)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-d87a8d4de6deb9eab1939da1cf21677f0774e6cd_41"></span>  <build_depend>std_msgs</build_depend></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-20-1"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-198"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-199"></span>

All of our listed dependencies have been added as a <tt class="backtick">build_depend</tt> for us, in addition to the default <tt class="backtick">buildtool_depend</tt> on catkin. In this case we want all of our specified dependencies to be available at build and run time, so we'll add a <tt class="backtick">run_depend</tt> tag for each of them as well:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-200"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-201"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-11-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-12-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-13-3"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb\', 12, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb" lang="en"><span class="line"><span class="LineNumber">[12](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_12)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_12"></span>  <buildtool_depend>catkin</buildtool_depend></span>
<span class="line"><span class="LineNumber">[13](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_13)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_13"></span></span>
<span class="line"><span class="LineNumber">[14](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_14)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_14"></span>  <build_depend>roscpp</build_depend></span>
<span class="line"><span class="LineNumber">[15](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_15)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_15"></span>  <build_depend>rospy</build_depend></span>
<span class="line"><span class="LineNumber">[16](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_16)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_16"></span>  <build_depend>std_msgs</build_depend></span>
<span class="line"><span class="LineNumber">[17](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_17)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_17"></span></span>
<span class="line"><span class="LineNumber">[18](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_18)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_18"></span>  <run_depend>roscpp</run_depend></span>
<span class="line"><span class="LineNumber">[19](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_19)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_19"></span>  <run_depend>rospy</run_depend></span>
<span class="line"><span class="LineNumber">[20](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_20)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-11d4d9ad779328e8d6530984ae4a97786529eeeb_20"></span>  <run_depend>std_msgs</run_depend></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-14-3"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-202"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-203"></span>

#### Final package.xml

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-204"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-205"></span>

As you can see the final [package.xml](/catkin/package.xml), without comments and unused tags, is much more concise:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-206"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-207"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-1-24"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-2-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-3-14"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-4-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-5-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-6-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-7-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-8-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-9-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-10-5"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-11-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-12-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-13-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-14-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-15-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-16-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-17-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-18-3"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-19-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-20-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-21-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-22-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-23-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-24-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-25-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-26-1"></span>

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387" lang="en"><span class="line"><span class="LineNumber">[1](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_1)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_1"></span><?xml version="1.0"?></span>
<span class="line"><span class="LineNumber">[2](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_2)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_2"></span><package></span>
<span class="line"><span class="LineNumber">[3](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_3)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_3"></span>  <name>beginner_tutorials</name></span>
<span class="line"><span class="LineNumber">[4](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_4)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_4"></span>  <version>0.1.0</version></span>
<span class="line"><span class="LineNumber">[5](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_5)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_5"></span>  <description>The beginner_tutorials package</description></span>
<span class="line"><span class="LineNumber">[6](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_6)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_6"></span></span>
<span class="line"><span class="LineNumber">[7](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_7)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_7"></span>  <maintainer email="you@yourdomain.tld">Your Name</maintainer></span>
<span class="line"><span class="LineNumber">[8](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_8)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_8"></span>  <license>BSD</license></span>
<span class="line"><span class="LineNumber">[9](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_9)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_9"></span>  <url type="website">http://wiki.ros.org/beginner_tutorials</url></span>
<span class="line"><span class="LineNumber">[10](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_10)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_10"></span>  <author email="you@yourdomain.tld">Jane Doe</author></span>
<span class="line"><span class="LineNumber">[11](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_11)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_11"></span></span>
<span class="line"><span class="LineNumber">[12](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_12)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_12"></span>  <buildtool_depend>catkin</buildtool_depend></span>
<span class="line"><span class="LineNumber">[13](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_13)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_13"></span></span>
<span class="line"><span class="LineNumber">[14](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_14)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_14"></span>  <build_depend>roscpp</build_depend></span>
<span class="line"><span class="LineNumber">[15](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_15)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_15"></span>  <build_depend>rospy</build_depend></span>
<span class="line"><span class="LineNumber">[16](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_16)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_16"></span>  <build_depend>std_msgs</build_depend></span>
<span class="line"><span class="LineNumber">[17](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_17)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_17"></span></span>
<span class="line"><span class="LineNumber">[18](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_18)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_18"></span>  <run_depend>roscpp</run_depend></span>
<span class="line"><span class="LineNumber">[19](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_19)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_19"></span>  <run_depend>rospy</run_depend></span>
<span class="line"><span class="LineNumber">[20](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_20)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_20"></span>  <run_depend>std_msgs</run_depend></span>
<span class="line"><span class="LineNumber">[21](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_21)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_21"></span></span>
<span class="line"><span class="LineNumber">[22](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_22)</span> <span class="LineAnchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.CA-7edb9265feeb7806a103b3a2b4381a199edb7387_22"></span></package></span>
</pre>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-27-1"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-208"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-209"></span>

### Customizing the CMakeLists.txt

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-210"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-211"></span>

Now that the [package.xml](/catkin/package.xml), which contains meta information, has been tailored to your package, you are ready to move on in the tutorials. The [CMakeLists.txt](/catkin/CMakeLists.txt) file created by [catkin_create_pkg](/catkin/commands/catkin_create_pkg) will be covered in the later tutorials about building ROS code.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.line-212"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.bottom"></span>

</div>

</div>

<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

Now that you've made a new ROS package, let's [build our ROS package](/ROS/Tutorials/BuildingPackages).<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

<span class="anchor" id="line-34"></span>

<span class="anchor" id="line-35"></span>

<span class="anchor" id="line-36"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/CreatingPackage (last edited 2013-05-30 21:01:22 by <span title="DaveColeman @ 108-202-178-72.lightspeed.sntcca.sbcglobal.net[108.202.178.72]">[davetcoleman](/davetcoleman "DaveColeman @ 108-202-178-72.lightspeed.sntcca.sbcglobal.net[108.202.178.72]")</span>)
