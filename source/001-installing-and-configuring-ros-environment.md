<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [InstallingandConfiguringROSEnvironment](/action/fullsearch/ROS/Tutorials/InstallingandConfiguringROSEnvironment?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FInstallingandConfiguringROSEnvironment%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

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

## Installing and Configuring Your ROS Environment

<span class="anchor" id="line-9-1"></span>**Description:** This tutorial walks you through installing ROS and setting up the ROS environment on your computer.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Next Tutorial:** [Navigating the ROS Filesystem](/ROS/Tutorials/NavigatingTheFilesystem)  

<span class="anchor" id="line-16-1"></span>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<div class="table-of-contents">

Contents

1.  [Install ROS](#Install_ROS)
2.  [Managing Your Environment](#Managing_Your_Environment)
3.  [Create a ROS Workspace](#Create_a_ROS_Workspace)

</div>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

## Install ROS

<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

Before starting these tutorials please complete installation as described in the [ROS installation instructions](/ROS/Installation).<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span>

<div class="blue solid"><span class="anchor" id="line-1-2"></span>

**Note:** If you installed ROS from a package manager like <tt class="backtick">apt</tt>, then those packages will not be write accessible and should not be edited by you the user. When working with ROS packages from source or when creating a new ROS package, you should always work in a directory that you have access to, like your home folder.

</div>

<span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

## Managing Your Environment

<span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span>

During the installation of ROS, you will see that you are prompted to <tt class="backtick">source</tt> one of several setup.*sh files, or even add this 'sourcing' to your shell startup script. This is required because ROS relies on the notion of combining spaces using the shell environment. This makes developing against different versions of ROS or against different sets of packages easier.<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span>

If you are ever having problems finding or using your ROS packages make sure that you have your environment properly setup. A good way to check is to ensure that [environment variables](/ROS/EnvironmentVariables) like [ROS_ROOT](/ROS/EnvironmentVariables#ROS_ROOT) and [ROS_PACKAGE_PATH](/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) are set:<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

<span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span>

<pre><span class="anchor" id="line-1-3"></span>$ export | grep ROS</pre>

<span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span>

If they are not then you might need to 'source' some setup.*sh files.<span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span>

Environment setup files are generated for you, but can come from different places:<span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span>

*   ROS packages installed with package managers provide setup.*sh files<span class="anchor" id="line-51"></span>
*   [rosbuild workspaces](http://www.ros.org/wiki/fuerte/Installation/Overlays) provide setup.*sh files using tools like [rosws](/rosws)<span class="anchor" id="line-52"></span>

*   Setup.*sh files are created as a by-product of [building](/catkin/workspaces#Building_Packages_with_catkin) or [installing](/catkin/workspaces#Installing_Packages_with_Catkin) catkin packages<span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span>

<span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

<div class="blue solid"><span class="anchor" id="line-1-4"></span>

**Note:** Throughout the tutorials you will see references to [rosbuild](/rosbuild) and [catkin](/catkin). These are the two available methods for organizing and building your ROS code. Generally, rosbuild is easy to use and simple, where as catkin uses more standard CMake conventions, so it is more sophisticated, but provides more flexibility especially for people wanting to integrate external code bases or who want to release their software. For a full break down visit [catkin or rosbuild](/catkin_or_rosbuild).

</div>

<span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span>

If you just installed ROS from <tt class="backtick">apt</tt> on Ubuntu then you will have setup.*sh files in '<tt class="backtick">/opt/ros/<distro>/</tt>', and you could source them like so:<span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span>

<span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span>

<pre><span class="anchor" id="line-1-5"></span># source /opt/ros/<distro>/setup.bash</pre>

<span class="anchor" id="line-63"></span>

Using the short name of your ROS distribution instead of <tt><distro></tt><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span>

If you installed ROS Indigo,that would be:<span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span>

<pre><span class="anchor" id="line-1-6"></span>$ source /opt/ros/indigo/setup.bash</pre>

<span class="anchor" id="line-69"></span>

You will need to run this command on every new shell you open to have access to the ros commands, unless you add this line to your .bashrc. This process allows you to install several ROS distributions (e.g. fuerte and groovy) on the same computer and switch between them.<span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

On other platforms you will find these setup.*sh files where ever you installed ROS to.<span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span>

## Create a ROS Workspace

<span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span>

<span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-7"></span>

<span class="anchor" id="line-2-2"></span><span class="anchor" id="line-3-2"></span>

<div class="blue solid"><span class="anchor" id="line-1-8"></span>

These instructions are for ROS Groovy and later. For ROS Fuerte and earlier, select rosbuild.

</div>

<span class="anchor" id="line-4-2"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-3"></span>

Let's create a [catkin workspace](/catkin/workspaces):<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-5"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-7"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-9"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-1-1"></span>$ mkdir -p ~/catkin_ws/src
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-2-1"></span>$ cd ~/catkin_ws/src
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-3-1"></span>$ catkin_init_workspace</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-11"></span>

Even though the workspace is empty (there are no packages in the 'src' folder, just a single <tt class="backtick">CMakeLists.txt</tt> link) you can still "build" the workspace:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-12"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-13"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-14"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-16"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-1-2"></span>$ cd ~/catkin_ws/
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-2-2"></span>$ catkin_make</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-17"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-18"></span>

The [catkin_make](/catkin/commands/catkin_make) command is a convenience tool for working with [catkin workspaces](/catkin/workspaces). If you look in your current directory you should now have a 'build' and 'devel' folder. Inside the 'devel' folder you can see that there are now several setup.*sh files. Sourcing any of these files will overlay this workspace on top of your environment. To understand more about this see the general catkin documentation: [catkin](/catkin). Before continuing source your new setup.*sh file:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-19"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-20"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-21"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-22"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-1-3"></span>$ source devel/setup.bash</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-23"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-24"></span>

To make sure your workspace is properly overlayed by the setup script, make sure <tt class="backtick">ROS_PACKAGE_PATH</tt> environment variable includes the directory you're in.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-26"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-28"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-29"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-1-4"></span>$ echo $ROS_PACKAGE_PATH
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-2-3"></span>/home/youruser/catkin_ws/src:/opt/ros/indigo/share:/opt/ros/indigo/stacks</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.line-30"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-catkin.2BAC8-CreateWorkspace.bottom"></span></div>

</div>

<span class="anchor" id="line-85"></span>

<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-9"></span>

<div dir="ltr" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.content" lang="en"><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.top"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-2"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-3"></span>

When working with ROS source code, it is often useful to do so in a "workspace". For the following ROS tutorials you will need an area for working on tutorials and creating new ROS stacks and packages.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-4"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-5"></span>

[rosws](/rosws) is a tool that provides a uniform interface to various version control systems such as SVN, Git and Mercurial and for managing all packages installed in a ROS overlay. An extensive tutorial on rosws can be found [here](http://www.ros.org/doc/api/rosinstall/html/rosws_tutorial.html).<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-6"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-7"></span>

### Creating a new workspace

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-8"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-9"></span>

The following command creates a new workspace in <tt class="backtick">~/fuerte_workspace</tt> which extends the set of packages installed in /opt/ros/fuerte:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-10"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-11"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-12"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-1"></span>rosws init ~/fuerte_workspace /opt/ros/fuerte</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-13"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-14"></span>

**Note:** rosws is part of the [rosinstall package](/rosinstall), which is not installed by default. The following command downloads it using the Ubuntu package manager:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-15"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-16"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-17"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-2"></span>sudo apt-get install python-rosinstall</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-18"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-19"></span>

### Creating a sandbox directory for new packages

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-20"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-21"></span>

New packages need to be put in a path that is in the variable <tt class="backtick">ROS_PACKAGE_PATH</tt>. All directories that are managed by rosws, i.e. that have been added using rosws are automatically added to the <tt class="backtick">ROS_PACKAGE_PATH</tt> when the file <tt class="backtick">setup.bash</tt> of the corresponding workspace is sourced. Although new packages should always be put in repositories that have been installed using rosws, it can be very convenient to have a sandbox directory where for instance packages created during the tutorials can be put without requiring any additional rosws commands. For that we create a new directory sandbox and add it to the hidden <tt class="backtick">.rosinstall</tt> file with rosws:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-22"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-23"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-24"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-25"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-26"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-3"></span>mkdir ~/fuerte_workspace/sandbox
<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-2-1"></span>rosws set ~/fuerte_workspace/sandbox</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-27"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-28"></span>

Every time the entries in the workspace change, it is necessary to re-source <tt class="backtick">~/fuerte_workspace/setup.bash</tt> to make sure that the updated <tt class="backtick">ROS_PACKAGE_PATH</tt> is used.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-29"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-30"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-31"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-32"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-4"></span>source ~/fuerte_workspace/setup.bash</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-33"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-34"></span>

It is very common to replace the line <tt class="backtick">source /opt/ros/fuerte/setup.bash</tt> to source the setup.bash in <tt class="backtick">~/fuerte_workspace</tt> or whichever workspace you use most often.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-35"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-36"></span>

A more complete ROS Workspace tutorial can be found [here](/fuerte/Installation/Overlays).<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-37"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-38"></span>

### Confirmation

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-39"></span>

To confirm that your package path has been set, echo the ROS_PACKAGE_PATH variable.<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-40"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-41"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-42"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-43"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-5"></span>$ echo $ROS_PACKAGE_PATH</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-44"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-45"></span>

You should see something similar to:<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-46"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-47"></span>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-48"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-49"></span>

<pre><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-1-6"></span>/home/your_user_name/fuerte_workspace/sandbox:/opt/ros/fuerte/share:/opt/ros/fuerte/stacks</pre>

<span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.line-50"></span><span class="anchor" id="ROS.2BAC8-Tutorials.2BAC8-rosbuild.2BAC8-CreateWorkspace.bottom"></span></div>

</div>

<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span><span class="anchor" id="line-90"></span>

Now that your environment is setup, continue with the [ROS file system tutorial](/ROS/Tutorials/NavigatingTheFilesystem).<span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

<span class="anchor" id="line-93"></span>

<span class="anchor" id="line-94"></span>

<span class="anchor" id="line-95"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/InstallingandConfiguringROSEnvironment (last edited 2015-06-18 10:17:19 by <span title="JohannesObermueller @ chello062178082246.28.11.vie.surfer.at[62.178.82.246]">[JohannesObermueller](/JohannesObermueller "JohannesObermueller @ chello062178082246.28.11.vie.surfer.at[62.178.82.246]")</span>)
