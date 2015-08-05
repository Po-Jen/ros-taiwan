<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [UsingRqtconsoleRoslaunch](/action/fullsearch/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUsingRqtconsoleRoslaunch%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [Understanding ROS services and parameters](/ROS/Tutorials/UnderstandingServicesParams).</td>

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

## Using rqt_console and roslaunch

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial introduces ROS using [rqt_console](/rqt_console) and [rqt_logger_level](/rqt_logger_level) for debugging and [roslaunch](/roslaunch) for starting many nodes at once. If you use <tt class="backtick">ROS fuerte</tt> or ealier distros where [rqt](/rqt) isn't fully available, please see this page with [this page](/ROS/Tutorials/UsingRxconsoleRoslaunch) that uses old <tt class="backtick">rx</tt> based tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Using rosed](/ROS/Tutorials/UsingRosEd)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<div class="table-of-contents">

Contents

1.  [Prerequisites rqt and turtlesim package](#Prerequisites_rqt_and_turtlesim_package)
2.  [Using rqt_console and rqt_logger_level](#Using_rqt_console_and_rqt_logger_level)
    1.  [Quick Note about logger levels](#Quick_Note_about_logger_levels)
    2.  [Using roslaunch](#Using_roslaunch)
    3.  [The Launch File](#The_Launch_File)
    4.  [The Launch File Explained](#The_Launch_File_Explained)
    5.  [roslaunching](#roslaunching)

</div>

<span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

### Prerequisites rqt and turtlesim package

<span class="anchor" id="line-23"></span>

The tutorial uses both the <tt>rqt</tt> and <tt>turtlesim</tt> packages. To do this tutorial, please install both packages, if you have not yet done so.<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

<pre><span class="anchor" id="line-1-2"></span>$ sudo apt-get install ros-<distro>-rqt ros-<distro>-rqt-common-plugins ros-<distro>-turtlesim</pre>

<span class="anchor" id="line-28"></span>

Replace <distro> with the name of your ROS distribution (e.g. hydro, groovy, electric, fuerte).<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

**NOTE:** you may have already built rqt and turtlesim for one of the previous tutorials. If you are not sure, installing them again will not hurt anything.<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

### Using rqt_console and rqt_logger_level

<span class="anchor" id="line-33"></span>

<tt class="backtick">rqt_console</tt> attaches to ROS's logging framework to display output from nodes. <tt class="backtick">rqt_logger_level</tt> allows us to change the verbosity level (DEBUG, WARN, INFO, and ERROR) of nodes as they run.<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span>

Now let's look at the turtlesim output in <tt class="backtick">rqt_console</tt> and switch logger levels in <tt class="backtick">rqt_logger_level</tt> as we use turtlesim. Before we start the turtlesim, **in two new terminals** start <tt class="backtick">rqt_console</tt> and <tt class="backtick">rqt_logger_level</tt>:<span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span>

<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

<pre><span class="anchor" id="line-1-3"></span>$ rosrun rqt_console rqt_console</pre>

<span class="anchor" id="line-40"></span>

<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

<pre><span class="anchor" id="line-1-4"></span>$ rosrun rqt_logger_level rqt_logger_level</pre>

<span class="anchor" id="line-43"></span>

You will see two windows popup:<span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span>

![rqt_console(start).png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=rqt_console%28start%29.png "rqt_console(start).png")<span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span>

![rqt_logger_level.png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=rqt_logger_level.png "rqt_logger_level.png")<span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span>

Now let's start turtlesim in a **new terminal**:<span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

<span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span>

<pre><span class="anchor" id="line-1-5"></span>$ rosrun turtlesim turtlesim_node</pre>

<span class="anchor" id="line-54"></span>

Since the default logger level is INFO you will see any info that the turtlesim publishes when it starts up, which should look like:<span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

![rqt_console(turtlesimstart).png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=rqt_console%28turtlesimstart%29.png "rqt_console(turtlesimstart).png")<span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span>

Now let's change the logger level to Warn by refreshing the nodes in the rqt_logger_level window and selecting Warn as shown below:<span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span>

![rqt_logger_level(error).png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=rqt_logger_level%28error%29.png "rqt_logger_level(error).png")<span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span>

Now let's run our turtle into the wall and see what is displayed in our rqt_console:<span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-65"></span>

*   <span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span>

    <pre><span class="anchor" id="line-1-6"></span>rostopic pub /turtle1/cmd_vel geometry_msgs/Twist -r 1 -- '{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}'</pre>

    <span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-70"></span>

*   <span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

    <pre><span class="anchor" id="line-1-7"></span>rostopic pub /turtle1/command_velocity turtlesim/Velocity -r 1 -- 2.0  0.0</pre>

    <span class="anchor" id="line-73"></span>

![rqt_console(turtlesimerror).png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=rqt_console%28turtlesimerror%29.png "rqt_console(turtlesimerror).png")<span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span>

#### Quick Note about logger levels

<span class="anchor" id="line-76"></span>

Logging levels are prioritized in the following order:<span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span>

<span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span>

<pre><span class="anchor" id="line-1-8"></span>Fatal
<span class="anchor" id="line-2-2"></span>Error
<span class="anchor" id="line-3-2"></span>Warn
<span class="anchor" id="line-4-2"></span>Info
<span class="anchor" id="line-5-2"></span>Debug</pre>

<span class="anchor" id="line-85"></span>

<tt class="backtick">Fatal</tt> has the highest priority and <tt class="backtick">Debug</tt> has the lowest. By setting the logger level, you will get all messages of that priority level or higher. For example, by setting the level to <tt class="backtick">Warn</tt>, you will get all <tt class="backtick">Warn</tt>, <tt class="backtick">Error</tt>, and <tt class="backtick">Fatal</tt> logging messages.<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

Let's <tt class="backtick">Ctrl-C</tt> our turtlesim and let's use <tt class="backtick">roslaunch</tt> to bring up multiple turtlesim nodes and a mimicking node to cause one turtlesim to mimic another:<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

#### Using roslaunch

<span class="anchor" id="line-90"></span>

<tt class="backtick">roslaunch</tt> starts nodes as defined in a launch file.<span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

Usage:<span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span>

<span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span>

<pre><span class="anchor" id="line-1-9"></span>$ roslaunch [package] [filename.launch]</pre>

<span class="anchor" id="line-97"></span>

First go to the <tt class="backtick">beginner_tutorials</tt> package we [created](/ROS/Tutorials/CreatingPackage) and [built](/ROS/Tutorials/BuildingPackages) earlier:<span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span>

<span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span>

<pre><span class="anchor" id="line-1-10"></span>$ roscd beginner_tutorials</pre>

<span class="anchor" id="line-102"></span>

If <tt class="backtick">roscd</tt> says similar to _roscd: No such package/stack 'beginner_tutorials'_ , you will need to <tt class="backtick">source</tt> the environment setup file like you did at the end of the [create_a_workspace](/catkin/Tutorials/create_a_workspace) tutorial:<span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span>

<pre><span class="anchor" id="line-1-11"></span>$ cd ~/catkin_ws
<span class="anchor" id="line-2-3"></span>$ source devel/setup.bash
<span class="anchor" id="line-3-3"></span>$ roscd beginner_tutorials</pre>

<span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span>

Then let's make a launch directory:<span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span>

<span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span><span class="anchor" id="line-114"></span>

<pre><span class="anchor" id="line-1-12"></span>$ mkdir launch
<span class="anchor" id="line-2-4"></span>$ cd launch</pre>

<span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span>

*   NOTE: The directory to store launch files don't necessarily have to be named as <tt class="backtick">launch</tt>. In fact you don't even need to store them in a directory. <tt class="backtick">roslaunch</tt> command automatically looks into the passed package and detect available launch files. However, it turned out to be a good practice.<span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span>

#### The Launch File

<span class="anchor" id="line-119"></span>

Now let's create a launch file called turtlemimic.launch and paste the following:<span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span>

<span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-1-13"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">function isnumbered(obj) { return obj.childNodes.length && obj.firstChild.childNodes.length && obj.firstChild.firstChild.className == 'LineNumber'; } function nformat(num,chrs,add) { var nlen = Math.max(0,chrs-(''+num).length), res = ''; while (nlen>0) { res += ' '; nlen-- } return res+num+add; } function addnumber(did, nstart, nstep) { var c = document.getElementById(did), l = c.firstChild, n = 1; if (!isnumbered(c)) { if (typeof nstart == 'undefined') nstart = 1; if (typeof nstep == 'undefined') nstep = 1; var n = nstart; while (l != null) { if (l.tagName == 'SPAN') { var s = document.createElement('SPAN'); var a = document.createElement('A'); s.className = 'LineNumber'; a.appendChild(document.createTextNode(nformat(n,4,''))); a.href = '#' + did + '_' + n; s.appendChild(a); s.appendChild(document.createTextNode(' ')); n += nstep; if (l.childNodes.length) { l.insertBefore(s, l.firstChild); } else { l.appendChild(s); } } l = l.nextSibling; } } return false; } function remnumber(did) { var c = document.getElementById(did), l = c.firstChild; if (isnumbered(c)) { while (l != null) { if (l.tagName == 'SPAN' && l.firstChild.className == 'LineNumber') l.removeChild(l.firstChild); l = l.nextSibling; } } return false; } function togglenumber(did, nstart, nstep) { var c = document.getElementById(did); if (isnumbered(c)) { remnumber(did); } else { addnumber(did,nstart,nstep); } return false; }</script> <script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777" lang="en"><span class="line"><span class="LineNumber">[1](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_1)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_1"></span><span class="anchor" id="line-1-14"></span><<span class="ID">launch</span>></span>
<span class="line"><span class="LineNumber">[2](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_2)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_2"></span><span class="anchor" id="line-2-5"></span></span>
<span class="line"><span class="LineNumber">[3](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_3)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_3"></span><span class="anchor" id="line-3-4"></span>  <<span class="ID">group</span> <span class="ID">ns</span>=<span class="String">"</span><span class="String">turtlesim1</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[4](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_4)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_4"></span><span class="anchor" id="line-4-3"></span>    <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">sim</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">turtlesim_node</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[5](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_5)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_5"></span><span class="anchor" id="line-5-3"></span>  </<span class="ID">group</span>></span>
<span class="line"><span class="LineNumber">[6](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_6)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_6"></span><span class="anchor" id="line-6-2"></span></span>
<span class="line"><span class="LineNumber">[7](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_7)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_7"></span><span class="anchor" id="line-7-2"></span>  <<span class="ID">group</span> <span class="ID">ns</span>=<span class="String">"</span><span class="String">turtlesim2</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[8](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_8)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_8"></span><span class="anchor" id="line-8-2"></span>    <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">sim</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">turtlesim_node</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[9](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_9)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_9"></span><span class="anchor" id="line-9-2"></span>  </<span class="ID">group</span>></span>
<span class="line"><span class="LineNumber">[10](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_10)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_10"></span><span class="anchor" id="line-10-2"></span></span>
<span class="line"><span class="LineNumber">[11](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_11)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_11"></span><span class="anchor" id="line-11-2"></span>  <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">mimic</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">mimic</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[12](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_12)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_12"></span><span class="anchor" id="line-12-2"></span>    <<span class="ID">remap</span> <span class="ID">from</span>=<span class="String">"</span><span class="String">input</span><span class="String">"</span> <span class="ID">to</span>=<span class="String">"</span><span class="String">turtlesim1/turtle1</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[13](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_13)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_13"></span><span class="anchor" id="line-13-2"></span>    <<span class="ID">remap</span> <span class="ID">from</span>=<span class="String">"</span><span class="String">output</span><span class="String">"</span> <span class="ID">to</span>=<span class="String">"</span><span class="String">turtlesim2/turtle1</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[14](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_14)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_14"></span><span class="anchor" id="line-14-2"></span>  </<span class="ID">node</span>></span>
<span class="line"><span class="LineNumber">[15](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_15)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_15"></span><span class="anchor" id="line-15-2"></span></span>
<span class="line"><span class="LineNumber">[16](#CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_16)</span> <span class="LineAnchor" id="CA-91a3946a9c4cf7301bb55ec0c3f8a77f6c8f9777_16"></span><span class="anchor" id="line-16-2"></span></<span class="ID">launch</span>></span>
</pre>

</div>

</div>

<span class="anchor" id="line-140"></span>

#### The Launch File Explained

<span class="anchor" id="line-141"></span>

Now, let's break the launch xml down.<span class="anchor" id="line-1-15"></span><span class="anchor" id="line-2-6"></span><span class="anchor" id="line-3-5"></span><span class="anchor" id="line-4-4"></span><span class="anchor" id="line-1-16"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-21ef414cf4c910bb1286ff2aedfe349a32a099b9\', 1, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-21ef414cf4c910bb1286ff2aedfe349a32a099b9" lang="en"><span class="line"><span class="LineNumber">[1](#CA-21ef414cf4c910bb1286ff2aedfe349a32a099b9_1)</span> <span class="LineAnchor" id="CA-21ef414cf4c910bb1286ff2aedfe349a32a099b9_1"></span><span class="anchor" id="line-1-17"></span><<span class="ID">launch</span>></span>
</pre>

</div>

</div>

<span class="anchor" id="line-5-4"></span>

Here we start the launch file with the launch tag, so that the file is identified as a launch file.<span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span>

<span class="anchor" id="line-1-18"></span><span class="anchor" id="line-2-7"></span><span class="anchor" id="line-3-6"></span><span class="anchor" id="line-4-5"></span><span class="anchor" id="line-5-5"></span><span class="anchor" id="line-6-3"></span><span class="anchor" id="line-7-3"></span><span class="anchor" id="line-8-3"></span><span class="anchor" id="line-9-3"></span><span class="anchor" id="line-10-3"></span><span class="anchor" id="line-1-19"></span><span class="anchor" id="line-2-8"></span><span class="anchor" id="line-3-7"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64\', 3, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64" lang="en"><span class="line"><span class="LineNumber">[3](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_3)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_3"></span><span class="anchor" id="line-1-20"></span>  <<span class="ID">group</span> <span class="ID">ns</span>=<span class="String">"</span><span class="String">turtlesim1</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[4](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_4)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_4"></span><span class="anchor" id="line-2-9"></span>    <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">sim</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">turtlesim_node</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[5](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_5)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_5"></span><span class="anchor" id="line-3-8"></span>  </<span class="ID">group</span>></span>
<span class="line"><span class="LineNumber">[6](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_6)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_6"></span><span class="anchor" id="line-4-6"></span></span>
<span class="line"><span class="LineNumber">[7](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_7)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_7"></span><span class="anchor" id="line-5-6"></span>  <<span class="ID">group</span> <span class="ID">ns</span>=<span class="String">"</span><span class="String">turtlesim2</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[8](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_8)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_8"></span><span class="anchor" id="line-6-4"></span>    <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">sim</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">turtlesim_node</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[9](#CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_9)</span> <span class="LineAnchor" id="CA-0975bc12bed743bd6d6b7cf5af4a7bc4bf2fdd64_9"></span><span class="anchor" id="line-7-4"></span>  </<span class="ID">group</span>></span>
</pre>

</div>

</div>

<span class="anchor" id="line-11-3"></span>

Here we start two groups with a namespace tag of turtlesim1 and turtlesim2 with a turtlesim node with a name of sim. This allows us to start two simulators without having name conflicts.<span class="anchor" id="line-144"></span><span class="anchor" id="line-145"></span>

<span class="anchor" id="line-1-21"></span><span class="anchor" id="line-2-10"></span><span class="anchor" id="line-3-9"></span><span class="anchor" id="line-4-7"></span><span class="anchor" id="line-5-7"></span><span class="anchor" id="line-6-5"></span><span class="anchor" id="line-7-5"></span><span class="anchor" id="line-1-22"></span><span class="anchor" id="line-2-11"></span><span class="anchor" id="line-3-10"></span><span class="anchor" id="line-4-8"></span><span class="anchor" id="line-5-8"></span><span class="anchor" id="line-6-6"></span><span class="anchor" id="line-7-6"></span><span class="anchor" id="line-8-4"></span><span class="anchor" id="line-9-4"></span><span class="anchor" id="line-10-4"></span><span class="anchor" id="line-11-4"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-78308b822a594630211cae0b2b508b405d07b108\', 11, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-78308b822a594630211cae0b2b508b405d07b108" lang="en"><span class="line"><span class="LineNumber">[11](#CA-78308b822a594630211cae0b2b508b405d07b108_11)</span> <span class="LineAnchor" id="CA-78308b822a594630211cae0b2b508b405d07b108_11"></span><span class="anchor" id="line-1-23"></span>  <<span class="ID">node</span> <span class="ID">pkg</span>=<span class="String">"</span><span class="String">turtlesim</span><span class="String">"</span> <span class="ID">name</span>=<span class="String">"</span><span class="String">mimic</span><span class="String">"</span> <span class="ResWord">type</span>=<span class="String">"</span><span class="String">mimic</span><span class="String">"</span>></span>
<span class="line"><span class="LineNumber">[12](#CA-78308b822a594630211cae0b2b508b405d07b108_12)</span> <span class="LineAnchor" id="CA-78308b822a594630211cae0b2b508b405d07b108_12"></span><span class="anchor" id="line-2-12"></span>    <<span class="ID">remap</span> <span class="ID">from</span>=<span class="String">"</span><span class="String">input</span><span class="String">"</span> <span class="ID">to</span>=<span class="String">"</span><span class="String">turtlesim1/turtle1</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[13](#CA-78308b822a594630211cae0b2b508b405d07b108_13)</span> <span class="LineAnchor" id="CA-78308b822a594630211cae0b2b508b405d07b108_13"></span><span class="anchor" id="line-3-11"></span>    <<span class="ID">remap</span> <span class="ID">from</span>=<span class="String">"</span><span class="String">output</span><span class="String">"</span> <span class="ID">to</span>=<span class="String">"</span><span class="String">turtlesim2/turtle1</span><span class="String">"</span>/></span>
<span class="line"><span class="LineNumber">[14](#CA-78308b822a594630211cae0b2b508b405d07b108_14)</span> <span class="LineAnchor" id="CA-78308b822a594630211cae0b2b508b405d07b108_14"></span><span class="anchor" id="line-4-9"></span>  </<span class="ID">node</span>></span>
</pre>

</div>

</div>

<span class="anchor" id="line-8-5"></span>

Here we start the mimic node with the topics input and output renamed to turtlesim1 and turtlesim2\. This renaming will cause turtlesim2 to mimic turtlesim1\.<span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span>

<span class="anchor" id="line-1-24"></span><span class="anchor" id="line-2-13"></span><span class="anchor" id="line-3-12"></span><span class="anchor" id="line-4-10"></span><span class="anchor" id="line-1-25"></span><span class="anchor" id="line-2-14"></span><span class="anchor" id="line-3-13"></span><span class="anchor" id="line-4-11"></span><span class="anchor" id="line-5-9"></span><span class="anchor" id="line-6-7"></span><span class="anchor" id="line-7-7"></span><span class="anchor" id="line-8-6"></span><span class="anchor" id="line-9-5"></span><span class="anchor" id="line-10-5"></span><span class="anchor" id="line-11-5"></span><span class="anchor" id="line-12-3"></span><span class="anchor" id="line-13-3"></span><span class="anchor" id="line-14-3"></span><span class="anchor" id="line-15-3"></span><span class="anchor" id="line-16-3"></span>

<div class="highlight python">

<div class="codearea" dir="ltr" lang="en"><script type="text/javascript">document.write('<a href="#" onclick="return togglenumber(\'CA-e33435967e0cc6e3273fdf1ce957aba2daaf5023\', 16, 1);" \ class="codenumbers">Toggle line numbers<\/a>');</script>

<pre dir="ltr" id="CA-e33435967e0cc6e3273fdf1ce957aba2daaf5023" lang="en"><span class="line"><span class="LineNumber">[16](#CA-e33435967e0cc6e3273fdf1ce957aba2daaf5023_16)</span> <span class="LineAnchor" id="CA-e33435967e0cc6e3273fdf1ce957aba2daaf5023_16"></span><span class="anchor" id="line-1-26"></span></<span class="ID">launch</span>></span>
</pre>

</div>

</div>

<span class="anchor" id="line-5-10"></span>

This closes the xml tag for the launch file.<span class="anchor" id="line-148"></span><span class="anchor" id="line-149"></span>

#### roslaunching

<span class="anchor" id="line-150"></span>

Now let's <tt class="backtick">roslaunch</tt> the launch file:<span class="anchor" id="line-151"></span><span class="anchor" id="line-152"></span>

<span class="anchor" id="line-153"></span><span class="anchor" id="line-154"></span>

<pre><span class="anchor" id="line-1-27"></span>$ roslaunch beginner_tutorials turtlemimic.launch</pre>

<span class="anchor" id="line-155"></span>

Two turtlesims will start and in a **new terminal** send the <tt class="backtick">rostopic</tt> command:<span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-158"></span>

*   <span class="anchor" id="line-159"></span><span class="anchor" id="line-160"></span>

    <pre><span class="anchor" id="line-1-28"></span>$ rostopic pub /turtlesim1/turtle1/cmd_vel geometry_msgs/Twist -r 1 -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, -1.8]'</pre>

    <span class="anchor" id="line-161"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-162"></span>

*   <span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span>

    <pre><span class="anchor" id="line-1-29"></span>$ rostopic pub /turtlesim1/turtle1/command_velocity turtlesim/Velocity -r 1 -- 2.0  -1.8</pre>

    <span class="anchor" id="line-165"></span><span class="anchor" id="line-166"></span>

You will see the two turtlesims start moving even though the publish command is only being sent to turtlesim1\.<span class="anchor" id="line-167"></span><span class="anchor" id="line-168"></span>

![mimic.png](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=mimic.png "mimic.png")<span class="anchor" id="line-169"></span><span class="anchor" id="line-170"></span>

We can also use [rqt_graph](/rqt_graph) to better understand what our launch file did. Run [rqt](/rqt)'s main window and select [rqt_graph](/rqt_graph):<span class="anchor" id="line-171"></span><span class="anchor" id="line-172"></span>

<span class="anchor" id="line-173"></span><span class="anchor" id="line-174"></span>

<pre><span class="anchor" id="line-1-30"></span>$ rqt</pre>

<span class="anchor" id="line-175"></span>

Or simply:<span class="anchor" id="line-176"></span><span class="anchor" id="line-177"></span>

<span class="anchor" id="line-178"></span><span class="anchor" id="line-179"></span>

<pre><span class="anchor" id="line-1-31"></span>$ rqt_graph</pre>

<span class="anchor" id="line-180"></span>

![mimiclaunch.jpg](/ROS/Tutorials/UsingRqtconsoleRoslaunch?action=AttachFile&do=get&target=mimiclaunch.jpg "mimiclaunch.jpg")<span class="anchor" id="line-181"></span><span class="anchor" id="line-182"></span>

Now that you have successfully used rqt_console and roslaunch, let's learn about [editor options for ROS](/ROS/Tutorials/UsingRosEd). You can <tt class="backtick">Ctrl-C</tt> all your turtlesims, as you will not need them for the next tutorials.<span class="anchor" id="line-183"></span><span class="anchor" id="line-184"></span>

<span class="anchor" id="line-185"></span>

<span class="anchor" id="line-186"></span>

<span class="anchor" id="line-187"></span>

<span class="anchor" id="line-188"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/UsingRqtconsoleRoslaunch (last edited 2015-07-09 11:58:59 by <span title="TullyFoote @ aslw039134.ethz.ch[129.132.39.134]">[TullyFoote](/TullyFoote "TullyFoote @ aslw039134.ethz.ch[129.132.39.134]")</span>)
