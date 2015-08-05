<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [NavigatingTheFilesystem](/action/fullsearch/ROS/Tutorials/NavigatingTheFilesystem?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FNavigatingTheFilesystem%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [Installing and Configuring Your ROS Environment](/ROS/Tutorials/InstallingandConfiguringROSEnvironment).</td>

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

## Navigating the ROS Filesystem

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial introduces ROS filesystem concepts, and covers using the roscd, rosls, and [rospack](/rospack) commandline tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Creating a ROS package](/ROS/Tutorials/CreatingPackage)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-2"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1"></span>

<div class="table-of-contents">

Contents

1.  [Prerequisites](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Prerequisites)
2.  [Quick Overview of Filesystem Concepts](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Quick_Overview_of_Filesystem_Concepts)
3.  [Filesystem Tools](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Filesystem_Tools)
    1.  [Using rospack and rosstack](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Using_rospack_and_rosstack)
    2.  [Using roscd](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Using_roscd)
    3.  [Special cases for roscd](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Special_cases_for_roscd)
    4.  [Using rosls](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Using_rosls)
    5.  [Tab Completion](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Tab_Completion)
4.  [Review](#ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.Review)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-3"></span>

### Prerequisites

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-5"></span>

For this tutorial we will inspect a package in ros-tutorials, please install it using<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-8"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-1"></span>$ sudo apt-get install ros-<distro>-ros-tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-10"></span>

Replace '<distro>' with the name of your ROS distribution (e.g. hydro, groovy, electric, fuerte etc.)<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-12"></span>

### Quick Overview of Filesystem Concepts

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-13"></span>

*   [Packages](/Packages): Packages are the lowest level of ROS software organization. They can contain anything: libraries, tools, executables, etc.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-14"></span>

*   [Manifest](/Manifest): A manifest is a description of a _package_. Its most important role is to define dependencies between _packages_.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-15"></span>

*   [Stacks](/Stacks): Stacks are collections of _package_s that form a higher-level library.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-16"></span>

*   [Stack Manifest](/Stack%20Manifest): These are just like normal _manifests_, but for _stacks_.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-18"></span>

When you look at the filesystem, it's easy to tell _packages_ and _stacks_ apart:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-19"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-20"></span>

*   A package is a directory with a manifest.xml file.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-21"></span>
*   A stack is a directory with a stack.xml file.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-22"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-23"></span>![filesystem_layout.png](/ROS/Tutorials/rosbuild/NavigatingTheFilesystem?action=AttachFile&do=get&target=filesystem_layout.png "filesystem_layout.png")<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-24"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-25"></span>

### Filesystem Tools

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-26"></span>

Code is spread across many ROS packages and stacks. Navigating with command-line tools such as <tt class="backtick">ls</tt> and <tt class="backtick">cd</tt> can be very tedious which is why ROS provides tools to help you.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-28"></span>

#### Using rospack and rosstack

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-29"></span>

[rospack](/rospack) and [rosstack](/rosstack) allow you to get information about packages and stacks. In this tutorial, we are only going to cover the <tt class="backtick">find</tt> option, which returns the path to package or stack.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-31"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-32"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-34"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-35"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-2"></span>$ rospack find [package_name]
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-2-1"></span>$ rosstack find [stack_name]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-36"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-37"></span>

Example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-39"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-40"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-3"></span>$ rospack find roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-41"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-42"></span>

Would return:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-43"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-45"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-4"></span>YOUR_INSTALL_PATH/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-47"></span>

If, for example, you have used the [binary install](/fuerte/Installation/Ubuntu) of [ROS Fuerte](/fuerte) on Ubuntu linux, you would see exactly:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-48"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-49"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-50"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-5"></span>/opt/ros/fuerte/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-51"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-52"></span>

#### Using roscd

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-53"></span>

<tt class="backtick">roscd</tt> is part of the [rosbash](/rosbash) suite. It allows you to change directory ([cd](http://ss64.com/bash/cd.html)) directly to a package or a stack.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-54"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-55"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-56"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-57"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-58"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-6"></span>$ roscd [locationname[/subdir]]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-59"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-60"></span>

Run this example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-61"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-62"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-63"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-7"></span>$ roscd roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-64"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-65"></span>

To verify that we have changed to the roscpp package directory. Now let's print the working directory using the Unix command [pwd](http://ss64.com/bash/pwd.html):<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-66"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-67"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-68"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-8"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-69"></span>

You should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-70"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-71"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-72"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-9"></span>YOUR_INSTALL_PATH/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-73"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-74"></span>

You can see that <tt>YOUR_INSTALL_PATH/share/roscpp</tt> is the same path that <tt>rospack find</tt> gave in the previous example.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-75"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-76"></span>

Note that <tt>roscd</tt>, like other ROS tools, will _only_ find ROS packages that are below the directories listed in your <tt>$ROS_PACKAGE_PATH</tt>. To see what is in your <tt>$ROS_PACKAGE_PATH</tt>, type:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-77"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-78"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-79"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-10"></span>$ echo $ROS_PACKAGE_PATH</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-80"></span>

If you have not modified your <tt>$ROS_PACKAGE_PATH</tt>, you should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-81"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-82"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-83"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-11"></span>YOUR_INSTALL_PATH/share:YOUR_INSTALL_PATH/stacks</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-84"></span>

Similarly to other environment paths, you can add additional directories to your <tt>$ROS_PACKAGE_PATH</tt>, with each path separated by a colon ':'<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-85"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-86"></span>

##### Subdirectories

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-87"></span>

<tt>roscd</tt> can also move to a subdirectory of a package or stack.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-88"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-89"></span>

Try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-90"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-91"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-92"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-93"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-12"></span>$ roscd roscpp/cmake
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-2-2"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-94"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-95"></span>

You should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-96"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-97"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-98"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-13"></span>YOUR_INSTALL_PATH/share/roscpp/cmake</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-99"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-100"></span>

#### Special cases for roscd

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-101"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-102"></span>

There are a few special places you can tell <tt>roscd</tt> to go, that are not a <tt>package</tt> or <tt>stack</tt>.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-103"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-104"></span>

##### roscd with no arguments

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-105"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-106"></span>

<tt class="backtick">roscd</tt> without an argument will take you to <tt>$ROS_WORKSPACE</tt>. <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-107"></span>Try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-108"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-109"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-110"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-111"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-14"></span>$ roscd
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-2-3"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-112"></span>

You should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-113"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-114"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-115"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-15"></span> /home/user/fuerte_workspace</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-116"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-117"></span>

Note: Prior to Fuerte, roscd would take you to $ROS_ROOT.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-118"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-119"></span>

##### roscd log

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-120"></span>

<tt>roscd log</tt> will take you to the folder where ROS stores log files. Note that if you have not run any ROS programs yet, this will yield an error saying that it does not yet exist.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-121"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-122"></span>

If you have run some ROS program before, try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-123"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-124"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-125"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-16"></span>$ roscd log</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-126"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-127"></span>

#### Using rosls

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-128"></span>

<tt class="backtick">rosls</tt> is part of the [rosbash](/rosbash) suite. It allows you to [ls](http://ss64.com/bash/ls.html) directly in a package, stack, or common location by name rather than by package path.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-129"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-130"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-131"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-132"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-133"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-17"></span>$ rosls [locationname[/subdir]]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-134"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-135"></span>

Example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-136"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-137"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-138"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-18"></span>$ rosls roscpp_tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-139"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-140"></span>

Would return:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-141"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-142"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-143"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-19"></span>bin  cmake  manifest.xml  srv</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-144"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-145"></span>

#### Tab Completion

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-146"></span>

It can get tedious to type out an entire package name. In the previous example, <tt>roscpp_tutorials</tt> is a fairly long name. Luckily, some ROS tools support [TAB completion](http://en.wikipedia.org/wiki/Command_line_completion).<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-147"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-148"></span>

Start by typing:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-149"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-150"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-151"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-20"></span>$ roscd roscpp_tut<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-152"></span>

After pushing the **TAB** key, the command line should fill out the rest.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-153"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-154"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-155"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-21"></span>$ roscd roscpp_tutorials/</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-156"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-157"></span>

This works because <tt>roscpp_tutorials</tt> is currently the only ROS package that starts with <tt>roscpp_tut</tt>.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-158"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-159"></span>

Now try typing:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-160"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-161"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-162"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-22"></span>$ roscd tur<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-163"></span>

After pushing the **TAB** key, the command line should fill out as much as possible:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-164"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-165"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-166"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-23"></span>$ roscd turtle</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-167"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-168"></span>

However, in this case there are multiple packages that begin with <tt>turtle</tt>. Try typing **TAB** another time. This should display all the ROS packages that begin with <tt>turtle</tt><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-169"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-170"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-171"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-24"></span>  turtle_actionlib/  turtlesim/         turtle_tf/</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-172"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-173"></span>

On the command line you should still have<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-174"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-175"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-176"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-25"></span>$ roscd turtle</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-177"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-178"></span>

Now type a <tt>s</tt> after <tt>turtle</tt> and then push **TAB**<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-179"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-180"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-181"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-26"></span>$ roscd turtles<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-182"></span>

Since there is only one package that start with <tt>turtles</tt>, you should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-183"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-184"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-185"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-1-27"></span>$ roscd turtlesim/</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-186"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-187"></span>

### Review

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-188"></span>

You may have noticed a pattern with the naming of the ROS tools:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-189"></span>

*   rospack = ros + pack(age)<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-190"></span>
*   rosstack = ros + stack<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-191"></span>
*   roscd = ros + cd<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-192"></span>
*   rosls = ros + ls<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-193"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-194"></span>

This naming pattern holds for many of the ROS tools.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.line-195"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-NavigatingTheFilesystem.bottom"></span>

</div>

</div>

<span class="anchor" id="line-25"></span>

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-3"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1"></span>

<div class="table-of-contents">

Contents

1.  [Prerequisites](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Prerequisites)
2.  [Quick Overview of Filesystem Concepts](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Quick_Overview_of_Filesystem_Concepts)
3.  [Filesystem Tools](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Filesystem_Tools)
    1.  [Using rospack](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Using_rospack)
    2.  [Using roscd](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Using_roscd)
    3.  [roscd log](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.roscd_log)
    4.  [Using rosls](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Using_rosls)
    5.  [Tab Completion](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Tab_Completion)
4.  [Review](#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.Review)

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-3"></span>

### Prerequisites

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-5"></span>

For this tutorial we will inspect a package in ros-tutorials, please install it using<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-8"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-1"></span>$ sudo apt-get install ros-<distro>-ros-tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-9"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-10"></span>

Replace '<distro>' with the name of your ROS distribution (e.g. hydro, groovy, electric, fuerte etc.)<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-12"></span>

### Quick Overview of Filesystem Concepts

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-13"></span>

*   **Packages:** Packages are the software organization unit of ROS code. Each package can contain libraries, executables, scripts, or other artifacts.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-14"></span>

*   **Manifest ([package.xml](/catkin/package.xml)):** A manifest is a description of a _package_. Its serves to define dependencies between _packages_ and to capture meta information about the _package_ like version, maintainer, license, etc...<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-16"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-19"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-20"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-21"></span>

<div class="blue solid"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-2"></span>

<a href="" onclick="seeSaw({toggle:['section'], show:[], hide:[]},0,true);return false;"><span class="seesaw section  showpart" style="display:inline">Show</span> <span class="seesaw section  hidepart" style="display:none">Hide</span></a>  <a href="" onclick="seeSaw({toggle:['stacks'], show:[], hide:[]},0,true);return false;"><span class="seesaw stacks  showpart" style="display:inline">note about stacks</span> <span class="seesaw stacks  hidepart" style="display:none">note about stacks</span></a><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-2-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-3-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-4-1"></span>

<div class="seesaw stacks section"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-3"></span>

**Note:** [rosbuild](/rosbuild) users might be wondering where stacks went, the concept of stacks was removed with catkin to simplify the growing code base and to support better distribution of packages. In [catkin](/catkin) you can define [metapackages](/catkin/migrating_from_rosbuild#Metapackages_and_the_Elimination_of_Stacks) to collect similar packages and multiple packages can reside in a single VCS repository. Those two features replace the functionality of stacks.

</div>

</div>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-23"></span>

### Filesystem Tools

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-24"></span>

Code is spread across many ROS packages. Navigating with command-line tools such as <tt class="backtick">ls</tt> and <tt class="backtick">cd</tt> can be very tedious which is why ROS provides tools to help you.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-26"></span>

#### Using rospack

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-27"></span>

[rospack](/rospack) allows you to get information about packages. In this tutorial, we are only going to cover the <tt class="backtick">find</tt> option, which returns the path to package.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-29"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-31"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-32"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-4"></span># rospack find [package_name]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-34"></span>

Example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-35"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-36"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-37"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-5"></span>$ rospack find roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-38"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-39"></span>

Would return:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-40"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-41"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-42"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-6"></span>YOUR_INSTALL_PATH/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-43"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-44"></span>

If you installed ROS from <tt class="backtick">apt</tt> on Ubuntu Linux you would see exactly:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-45"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-47"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-7"></span>/opt/ros/hydro/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-48"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-49"></span>

#### Using roscd

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-50"></span>

<tt class="backtick">roscd</tt> is part of the [rosbash](/rosbash) suite. It allows you to change directory ([cd](http://ss64.com/bash/cd.html)) directly to a package or a stack.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-51"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-52"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-53"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-54"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-55"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-8"></span># roscd [locationname[/subdir]]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-56"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-57"></span>

Run this example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-58"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-59"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-60"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-9"></span>$ roscd roscpp</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-61"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-62"></span>

To verify that we have changed to the roscpp package directory. Now let's print the working directory using the Unix command [pwd](http://ss64.com/bash/pwd.html):<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-63"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-64"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-65"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-10"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-66"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-67"></span>

You should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-68"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-69"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-70"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-11"></span>YOUR_INSTALL_PATH/share/roscpp</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-71"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-72"></span>

You can see that <tt class="backtick">YOUR_INSTALL_PATH/share/roscpp</tt> is the same path that <tt class="backtick">rospack find</tt> gave in the previous example.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-73"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-74"></span>

Note that [roscd](/roscd), like other ROS tools, will _only_ find ROS packages that are within the directories listed in your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH). To see what is in your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH), type:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-75"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-76"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-77"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-12"></span>$ echo $ROS_PACKAGE_PATH</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-78"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-79"></span>

Your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) should contain a list of directories where you have ROS packages separated by colons. A typical [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) might look like this:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-80"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-81"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-82"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-83"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-13"></span>/opt/ros/hydro/base/install/share:/opt/ros/hydro/base/install/stacks</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-84"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-85"></span>

Similarly to other environment paths, you can add additional directories to your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH), with each path separated by a colon ':'.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-86"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-87"></span>

##### Subdirectories

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-88"></span>

[roscd](/roscd) can also move to a subdirectory of a package or stack.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-89"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-90"></span>

Try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-91"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-92"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-93"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-94"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-95"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-14"></span>$ roscd roscpp/cmake
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-2-2"></span>$ pwd</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-96"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-97"></span>

You should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-98"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-99"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-100"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-15"></span>YOUR_INSTALL_PATH/share/roscpp/cmake</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-101"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-102"></span>

#### roscd log

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-103"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-104"></span>

<tt class="backtick">roscd log</tt> will take you to the folder where ROS stores log files. Note that if you have not run any ROS programs yet, this will yield an error saying that it does not yet exist.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-105"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-106"></span>

If you have run some ROS program before, try:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-107"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-108"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-109"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-16"></span>$ roscd log</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-110"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-111"></span>

#### Using rosls

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-112"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-113"></span>

[rosls](/rosbash#rosls) is part of the [rosbash](/rosbash) suite. It allows you to [ls](http://ss64.com/bash/ls.html) directly in a package by name rather than by absolute path.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-114"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-115"></span>

Usage:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-116"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-117"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-118"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-17"></span># rosls [locationname[/subdir]]</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-119"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-120"></span>

Example:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-121"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-122"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-123"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-18"></span>$ rosls roscpp_tutorials</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-124"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-125"></span>

Would return:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-126"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-127"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-128"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-19"></span>cmake launch package.xml  srv</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-129"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-130"></span>

#### Tab Completion

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-131"></span>

It can get tedious to type out an entire package name. In the previous example, <tt class="backtick">roscpp_tutorials</tt> is a fairly long name. Luckily, some ROS tools support [TAB completion](http://en.wikipedia.org/wiki/Command_line_completion).<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-132"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-133"></span>

Start by typing:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-134"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-135"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-136"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-20"></span># roscd roscpp_tut<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-137"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-138"></span>

After pushing the **TAB** key, the command line should fill out the rest:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-139"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-140"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-141"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-21"></span>$ roscd roscpp_tutorials/</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-142"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-143"></span>

This works because <tt class="backtick">roscpp_tutorials</tt> is currently the only ROS package that starts with <tt class="backtick">roscpp_tut</tt>.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-144"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-145"></span>

Now try typing:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-146"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-147"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-148"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-22"></span># roscd tur<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-149"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-150"></span>

After pushing the **TAB** key, the command line should fill out as much as possible:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-151"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-152"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-153"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-23"></span>$ roscd turtle</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-154"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-155"></span>

However, in this case there are multiple packages that begin with <tt class="backtick">turtle</tt>. Try typing **TAB** another time. This should display all the ROS packages that begin with <tt class="backtick">turtle</tt>:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-156"></span>

*   <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-157"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-158"></span>

    <pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-24"></span>turtle_actionlib/  turtlesim/         turtle_tf/</pre>

    <span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-159"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-160"></span>

On the command line you should still have:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-161"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-162"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-163"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-25"></span>$ roscd turtle</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-164"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-165"></span>

Now type a <tt class="backtick">s</tt> after <tt class="backtick">turtle</tt> and then push **TAB**:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-166"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-167"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-168"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-26"></span># roscd turtles<<< now push the TAB key >>></pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-169"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-170"></span>

Since there is only one package that start with <tt class="backtick">turtles</tt>, you should see:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-171"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-172"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-173"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-1-27"></span>$ roscd turtlesim/</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-174"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-175"></span>

### Review

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-176"></span>

You may have noticed a pattern with the naming of the ROS tools:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-177"></span>

*   rospack = ros + pack(age)<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-178"></span>
*   roscd = ros + cd<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-179"></span>
*   rosls = ros + ls<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-180"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-181"></span>

This naming pattern holds for many of the ROS tools.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.line-182"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-NavigatingTheFilesystem.bottom"></span>

</div>

</div>

<span class="anchor" id="line-28"></span>

Now that you can get around in ROS, let's [create a package](http://wiki.ros.org/ROS/Tutorials/CreatingPackage).<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

<span class="anchor" id="line-31"></span>

<span class="anchor" id="line-32"></span>

<span class="anchor" id="line-33"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/NavigatingTheFilesystem (last edited 2015-05-20 20:50:37 by <span title="ruffsl @ 70-35-50-58.static.wiline.com[70.35.50.58]">[ruffsl](/ruffsl "ruffsl @ 70-35-50-58.static.wiline.com[70.35.50.58]")</span>)
