<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [Creating a Package by Hand](/action/fullsearch/ROS/Tutorials/Creating%20a%20Package%20by%20Hand?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FCreating+a+Package+by+Hand%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

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

## Creating a ROS package by hand.

<span class="anchor" id="line-9-1"></span>**Description:** This tutorial explains how to manually create a ROS package.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span>**Tutorial Level:** INTERMEDIATE   

<span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Next Tutorial:** [Managing System Dependencies](/ROS/Tutorials/rosdep)  

<span class="anchor" id="line-16-1"></span>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span><span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span><span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span><span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span><span class="anchor" id="line-90"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-2"></span>

There is a tool for creating ROS [Packages](/Packages) ([roscreate-pkg](/roscreate)), but, as you will see, there is nothing actually difficult here. <tt class="backtick">roscreate-pkg</tt> prevents mistakes and saves effort, but packages are just a directory and a simple XML file.<span class="anchor" id="line-2-2"></span><span class="anchor" id="line-3-2"></span>

Now we'll create a new foobar package. This tutorial assumes that we're working in the directory <tt class="backtick">pkgs</tt> on your [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables).<span class="anchor" id="line-4-2"></span><span class="anchor" id="line-5-2"></span>

<span class="anchor" id="line-6-2"></span><span class="anchor" id="line-7-2"></span><span class="anchor" id="line-8-2"></span>

<pre><span class="anchor" id="line-1-3"></span>pkgs$ mkdir foobar
<span class="anchor" id="line-2-3"></span>pkgs$ cd foobar</pre>

<span class="anchor" id="line-9-2"></span><span class="anchor" id="line-10-2"></span>

The very first thing we'll do is add our [manifest](/Manifest) file. The <tt class="backtick">manifest.xml</tt> file allows tools like [rospack](/rospack) to determine information about what your package depends upon.<span class="anchor" id="line-11-2"></span><span class="anchor" id="line-12-2"></span>

Inside of <tt class="backtick">foobar/manifest.xml</tt> put the following:<span class="anchor" id="line-13-2"></span><span class="anchor" id="line-14-2"></span>

<span class="anchor" id="line-15-2"></span><span class="anchor" id="line-16-2"></span><span class="anchor" id="line-17-1"></span><span class="anchor" id="line-18-1"></span><span class="anchor" id="line-19-1"></span><span class="anchor" id="line-20-1"></span><span class="anchor" id="line-21-1"></span><span class="anchor" id="line-22-1"></span>

<pre><span class="anchor" id="line-1-4"></span><package>
<span class="anchor" id="line-2-4"></span>  <description brief="example package tutorial">A simple tutorial package</description>
<span class="anchor" id="line-3-3"></span>  <author>Your Name Here</author>
<span class="anchor" id="line-4-3"></span>  <license>BSD</license>
<span class="anchor" id="line-5-3"></span>  <depend package="roscpp" />
<span class="anchor" id="line-6-3"></span>  <depend package="std_msgs" />
<span class="anchor" id="line-7-3"></span></package></pre>

<span class="anchor" id="line-23-1"></span><span class="anchor" id="line-24-1"></span>

Now that your package has a manifest, ROS can find it. Try executing the command:<span class="anchor" id="line-25-1"></span><span class="anchor" id="line-26-1"></span>

<span class="anchor" id="line-27-1"></span><span class="anchor" id="line-28-1"></span>

<pre><span class="anchor" id="line-1-5"></span>rospack find foobar</pre>

<span class="anchor" id="line-29-1"></span><span class="anchor" id="line-30-1"></span>

If ROS is set up correctly you should see something like: <tt class="backtick">/home/user/ros/pkgs/foobar</tt>. This is how ROS finds packages behind the scenes.<span class="anchor" id="line-31-1"></span><span class="anchor" id="line-32-1"></span>

Note that this package now also has dependencies on [roscpp](/roscpp) and [std_msgs](/std_msgs). To see one example of why specifying these dependencies is useful, try executing the following commands [rospack](/rospack) commands:<span class="anchor" id="line-33-1"></span><span class="anchor" id="line-34-1"></span>

<span class="anchor" id="line-35-1"></span><span class="anchor" id="line-36-1"></span><span class="anchor" id="line-37-1"></span>

<pre><span class="anchor" id="line-1-6"></span>rospack export --lang=cpp --attrib=cflags foobar
<span class="anchor" id="line-2-5"></span>rospack export --lang=cpp --attrib=lflags foobar</pre>

<span class="anchor" id="line-38-1"></span><span class="anchor" id="line-39-1"></span>

When you run these, rospack looks up the dependencies of <tt class="backtick">foobar</tt> and generates the necessary list of includes or linking statements to compile and link the executable. These commands are used by the ROS build system to correctly compile and link your packages despite the modular nature of ROS. You'll probably never have to use these directly since our build system takes care of it for you. However, as you can see, they are reasonably easy use if you want to use a different build system.<span class="anchor" id="line-40-1"></span><span class="anchor" id="line-41-1"></span>

In order to take advantage of this, we need to make two build files: a <tt class="backtick">Makefile</tt> and [CMakeLists.txt](/CMakeLists) file.<span class="anchor" id="line-42-1"></span><span class="anchor" id="line-43-1"></span>

Inside of <tt class="backtick">foobar/Makefile</tt>, put:<span class="anchor" id="line-44-1"></span><span class="anchor" id="line-45-1"></span>

<span class="anchor" id="line-46-1"></span><span class="anchor" id="line-47-1"></span>

<pre><span class="anchor" id="line-1-7"></span>include $(shell rospack find mk)/cmake.mk</pre>

<span class="anchor" id="line-48-1"></span><span class="anchor" id="line-49-1"></span>

This tells <tt class="backtick">make</tt> that we're going to use CMake instead of Make to build this package.<span class="anchor" id="line-50-1"></span><span class="anchor" id="line-51-1"></span>

Now we need the [CMakeLists.txt](/CMakeLists) file so that we can use CMake instead. ROS uses CMake for its more powerful flexibility when building across multiple platforms.<span class="anchor" id="line-52-1"></span><span class="anchor" id="line-53-1"></span>

In <tt class="backtick">foobar/CMakeLists.txt</tt> put:<span class="anchor" id="line-54-1"></span><span class="anchor" id="line-55-1"></span>

<span class="anchor" id="line-56-1"></span><span class="anchor" id="line-57-1"></span><span class="anchor" id="line-58-1"></span><span class="anchor" id="line-59-1"></span>

<pre><span class="anchor" id="line-1-8"></span>cmake_minimum_required(VERSION 2.4.6)
<span class="anchor" id="line-2-6"></span>include($ENV{ROS_ROOT}/core/rosbuild/rosbuild.cmake)
<span class="anchor" id="line-3-4"></span>rosbuild_init()</pre>

<span class="anchor" id="line-60-1"></span>

That's all you need to start building a package in ROS. Of course, if you want it to actually start building something, you're going to need to learn a couple more CMake macros. See our [CMakeLists](/CMakeLists) guide for more information.

</div>

<span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

<span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span><span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span><span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span><span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span><span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span><span class="anchor" id="line-148"></span><span class="anchor" id="line-149"></span><span class="anchor" id="line-150"></span><span class="anchor" id="line-151"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-9"></span>

There is a tool for creating ROS [Packages](/Packages) ([catkin_create_pkg](/catkin/commands/catkin_create_pkg)), but, as you will see, there is nothing actually difficult here. <tt class="backtick">catkin_create_pkg</tt> prevents mistakes and saves effort, but packages are just a directory and a simple XML file.<span class="anchor" id="line-2-7"></span><span class="anchor" id="line-3-5"></span>

Now we'll create a new foobar package. This tutorial assumes that we're working your catkin workspace and sourcing of the setup file is already done.<span class="anchor" id="line-4-4"></span><span class="anchor" id="line-5-4"></span>

<span class="anchor" id="line-6-4"></span><span class="anchor" id="line-7-4"></span><span class="anchor" id="line-8-3"></span>

<pre><span class="anchor" id="line-1-10"></span>catkin_ws_top $ mkdir -p src/foobar
<span class="anchor" id="line-2-8"></span>catkin_ws_top $ cd src/foobar</pre>

<span class="anchor" id="line-9-3"></span><span class="anchor" id="line-10-3"></span>

The very first thing we'll do is add our [manifest](/catkin/package.xml) file. The <tt class="backtick">package.xml</tt> file allows tools like [rospack](/rospack) to determine information about what your package depends upon.<span class="anchor" id="line-11-3"></span><span class="anchor" id="line-12-3"></span>

Inside of <tt class="backtick">foobar/package.xml</tt> put the following:<span class="anchor" id="line-13-3"></span><span class="anchor" id="line-14-3"></span>

<span class="anchor" id="line-15-3"></span><span class="anchor" id="line-16-3"></span><span class="anchor" id="line-17-2"></span><span class="anchor" id="line-18-2"></span><span class="anchor" id="line-19-2"></span><span class="anchor" id="line-20-2"></span><span class="anchor" id="line-21-2"></span><span class="anchor" id="line-22-2"></span><span class="anchor" id="line-23-2"></span><span class="anchor" id="line-24-2"></span><span class="anchor" id="line-25-2"></span><span class="anchor" id="line-26-2"></span><span class="anchor" id="line-27-2"></span><span class="anchor" id="line-28-2"></span><span class="anchor" id="line-29-2"></span><span class="anchor" id="line-30-2"></span><span class="anchor" id="line-31-2"></span><span class="anchor" id="line-32-2"></span>

<pre><span class="anchor" id="line-1-11"></span><package>
<span class="anchor" id="line-2-9"></span>  <name>foobar</name>
<span class="anchor" id="line-3-6"></span>  <version>1.2.4</version>
<span class="anchor" id="line-4-5"></span>  <description>
<span class="anchor" id="line-5-5"></span>  This package provides foo capability.
<span class="anchor" id="line-6-5"></span>  </description>
<span class="anchor" id="line-7-5"></span>  <maintainer email="foobar@foo.bar.willowgarage.com">PR-foobar</maintainer>
<span class="anchor" id="line-8-4"></span>  <license>BSD</license>
<span class="anchor" id="line-9-4"></span>
<span class="anchor" id="line-10-4"></span>  <buildtool_depend>catkin</buildtool_depend>
<span class="anchor" id="line-11-4"></span>
<span class="anchor" id="line-12-4"></span>  <build_depend>roscpp</build_depend>
<span class="anchor" id="line-13-4"></span>  <build_depend>std_msgs</build_depend>
<span class="anchor" id="line-14-4"></span>
<span class="anchor" id="line-15-4"></span>  <run_depend>roscpp</run_depend>
<span class="anchor" id="line-16-4"></span>  <run_depend>std_msgs</run_depend>
<span class="anchor" id="line-17-3"></span></package></pre>

<span class="anchor" id="line-33-2"></span><span class="anchor" id="line-34-2"></span>

See also [this page from catkin tutorial](/catkin/Tutorials/CreatingPackage#ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreatingPackage.Customizing_the_package.xml) for further information on [catkin/package.xml](/catkin/package.xml).<span class="anchor" id="line-35-2"></span><span class="anchor" id="line-36-2"></span>

Now that your package has a manifest, ROS can find it. Try executing the command:<span class="anchor" id="line-37-2"></span><span class="anchor" id="line-38-2"></span>

<span class="anchor" id="line-39-2"></span><span class="anchor" id="line-40-2"></span>

<pre><span class="anchor" id="line-1-12"></span>rospack find foobar</pre>

<span class="anchor" id="line-41-2"></span><span class="anchor" id="line-42-2"></span>

If ROS is set up correctly you should see something like: <tt class="backtick">/home/user/ros/catkin_ws_top/src/foobar</tt>. This is how ROS finds packages behind the scenes.<span class="anchor" id="line-43-2"></span><span class="anchor" id="line-44-2"></span>

Note that this package now also has dependencies on [roscpp](/roscpp) and [std_msgs](/std_msgs).<span class="anchor" id="line-45-2"></span><span class="anchor" id="line-46-2"></span>

Such dependencies are used by catkin to configure packages in the right order.<span class="anchor" id="line-47-2"></span><span class="anchor" id="line-48-2"></span>

Now we need the [CMakeLists.txt](/CMakeLists) file so that [catkin_make](/catkin_make), which uses CMake for its more powerful flexibility when building across multiple platforms, builds the package.<span class="anchor" id="line-49-2"></span><span class="anchor" id="line-50-2"></span>

In <tt class="backtick">foobar/CMakeLists.txt</tt> put:<span class="anchor" id="line-51-2"></span><span class="anchor" id="line-52-2"></span><span class="anchor" id="line-53-2"></span><span class="anchor" id="line-54-2"></span><span class="anchor" id="line-55-2"></span><span class="anchor" id="line-56-2"></span>

<pre><span class="anchor" id="line-1-13"></span>cmake_minimum_required(VERSION 2.8.3)
<span class="anchor" id="line-2-10"></span>project(foobar)
<span class="anchor" id="line-3-7"></span>find_package(catkin REQUIRED roscpp std_msgs)
<span class="anchor" id="line-4-6"></span>catkin_package()</pre>

<span class="anchor" id="line-57-2"></span><span class="anchor" id="line-58-2"></span>

That's all you need to start building a package in ROS using <tt class="backtick">catkin</tt>. Of course, if you want it to actually start building something, you're going to need to learn a couple more CMake macros. See our [CMakeLists.txt](/catkin/CMakeLists.txt) guide for more information. Also always go back to beginner level tutorial ([CreatingPackage](/ROS/Tutorials/CreatingPackage) and so on) to customize your <tt class="backtick">package.xml</tt> and <tt class="backtick">CMakeLists.txt</tt>.

</div>

<span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span>

<span class="anchor" id="line-154"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/Creating a Package by Hand (last edited 2013-02-10 11:20:31 by <span title="Yuto Inagaki @ KD114017242064.ppp-bb.dion.ne.jp[114.17.242.64]">[Yuto Inagaki](/Yuto%20Inagaki "Yuto Inagaki @ KD114017242064.ppp-bb.dion.ne.jp[114.17.242.64]")</span>)
