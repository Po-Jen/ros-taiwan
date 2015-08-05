<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [CreatingMsgAndSrv](/action/fullsearch/ROS/Tutorials/CreatingMsgAndSrv?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FCreatingMsgAndSrv%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [using rosed](/ROS/Tutorials/UsingRosEd).</td>

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

## Creating a ROS msg and srv

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial covers how to create and build msg and srv files as well as the [rosmsg](/rosmsg), rossrv and roscp commandline tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** Writing a simple publisher and subscriber [(python)](/ROS/Tutorials/WritingPublisherSubscriber%28python%29) [(c++)](/ROS/Tutorials/WritingPublisherSubscriber%28c%2B%2B%29)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<script type="text/javascript"><!-- // @@ Buildsystem macro function Buildsystem(sections) { var dotversion = ".buildsystem." // Tag shows unless already tagged $.each(sections.show, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionshow") } ) // Tag hides unless already tagged $.each(sections.hide, function() { $("div" + dotversion + this).not(".versionshow,.versionhide").addClass("versionhide") } ) // Show or hide according to tag $(".versionshow").removeClass("versionshow").filter("div").show() $(".versionhide").removeClass("versionhide").filter("div").hide() } function getURLParameter(name) { return decodeURIComponent( ( new RegExp( '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)' ).exec(location.search) || [,""] )[1].replace(/\+/g, '%20') ) || null; } $(document).ready(function() { var activesystem = "catkin"; var url_distro = getURLParameter('buildsystem'); if (url_distro) { activesystem = url_distro; } $("div.buildsystem").not("."+activesystem).hide(); $("#"+activesystem).click(); $("input.version:hidden").each(function() { var bg = $(this).attr("value").split(":"); $("div.version." + bg[0]).css("background-color", bg[1]).removeClass(bg[0]) }); }) // --></script> <span class="btn-group"><button id="catkin" class="btn btn-default" onclick="Buildsystem({show:['catkin'], hide:['rosbuild']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('rosbuild').style.background='#e6e6e6';document.getElementById('rosbuild').style.color='#3e4f6e';return false">catkin</button> <button id="rosbuild" class="btn btn-default" onclick="Buildsystem({show:['rosbuild'], hide:['catkin']});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('catkin').style.background='#e6e6e6';document.getElementById('catkin').style.color='#3e4f6e';return false">rosbuild</button></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

<div class="table-of-contents">

Contents

1.  [Introduction to msg and srv](#Introduction_to_msg_and_srv)
2.  [Using msg](#Using_msg)
    1.  [Creating a msg](#Creating_a_msg)
3.  [Using rosmsg](#Using_rosmsg)
4.  [Using srv](#Using_srv)
    1.  [Creating a srv](#Creating_a_srv)
    2.  [Using rossrv](#Using_rossrv)
5.  [Common step for msg and srv](#Common_step_for_msg_and_srv)
6.  [Getting Help](#Getting_Help)
7.  [Review](#Review)
8.  [Next Tutorial](#Next_Tutorial)

</div>

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

### Introduction to msg and srv

<span class="anchor" id="line-25"></span>

*   [msg](/msg): msg files are simple text files that describe the fields of a ROS message. They are used to generate source code for messages in different languages.<span class="anchor" id="line-26"></span>

*   [srv](/srv): an srv file describes a service. It is composed of two parts: a request and a response.<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

msg files are stored in the <tt class="backtick">msg</tt> directory of a package, and srv files are stored in the <tt class="backtick">srv</tt> directory.<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

msgs are just simple text files with a field type and field name per line. The field types you can use are:<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

*   int8, int16, int32, int64 (plus uint*)<span class="anchor" id="line-33"></span>
*   float32, float64<span class="anchor" id="line-34"></span>
*   string<span class="anchor" id="line-35"></span>
*   time, duration<span class="anchor" id="line-36"></span>
*   other msg files<span class="anchor" id="line-37"></span>
*   variable-length array[] and fixed-length array[C]<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

There is also a special type in ROS: <tt class="backtick">Header</tt>, the header contains a timestamp and coordinate frame information that are commonly used in ROS. You will frequently see the first line in a msg file have <tt class="backtick">Header header</tt>.<span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

Here is an example of a msg that uses a Header, a string primitive, and two other msgs :<span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span>

<span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span>

<pre><span class="anchor" id="line-1-2"></span>  Header header
<span class="anchor" id="line-2-2"></span>  string child_frame_id
<span class="anchor" id="line-3-2"></span>  geometry_msgs/PoseWithCovariance pose
<span class="anchor" id="line-4-2"></span>  geometry_msgs/TwistWithCovariance twist</pre>

<span class="anchor" id="line-49"></span>

srv files are just like msg files, except they contain two parts: a request and a response. The two parts are separated by a '---' line. Here is an example of a srv file:<span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

<span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

<pre><span class="anchor" id="line-1-3"></span>int64 A
<span class="anchor" id="line-2-3"></span>int64 B
<span class="anchor" id="line-3-3"></span>---
<span class="anchor" id="line-4-3"></span>int64 Sum</pre>

<span class="anchor" id="line-57"></span>

In the above example, <tt>A</tt> and <tt>B</tt> are the request, and <tt>Sum</tt> is the response.<span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

### Using msg

<span class="anchor" id="line-60"></span>

#### Creating a msg

<span class="anchor" id="line-61"></span>

Let's define a new msg in the package that was created in the previous tutorial.<span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span>

<span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span><span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span><span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span><span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span><span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span><span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span><span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span><span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span><span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span><span class="anchor" id="line-148"></span><span class="anchor" id="line-149"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-4"></span>

<span class="anchor" id="line-2-4"></span><span class="anchor" id="line-3-4"></span><span class="anchor" id="line-4-4"></span><span class="anchor" id="line-5-2"></span>

<pre><span class="anchor" id="line-1-5"></span>$ cd ~/catkin_ws/src/beginner_tutorials
<span class="anchor" id="line-2-5"></span>$ mkdir msg
<span class="anchor" id="line-3-5"></span>$ echo "int64 num" > msg/Num.msg</pre>

<span class="anchor" id="line-6-2"></span><span class="anchor" id="line-7-2"></span>

The example <tt class="backtick">.msg</tt> file above contains only 1 line. You can, of course, create a more complex file by adding multiple elements, one per line, like this:<span class="anchor" id="line-8-2"></span><span class="anchor" id="line-9-2"></span><span class="anchor" id="line-10-2"></span><span class="anchor" id="line-11-2"></span><span class="anchor" id="line-12-2"></span><span class="anchor" id="line-13-2"></span>

<pre><span class="anchor" id="line-1-6"></span>string first_name
<span class="anchor" id="line-2-6"></span>string last_name
<span class="anchor" id="line-3-6"></span>uint8 age
<span class="anchor" id="line-4-5"></span>uint32 score</pre>

<span class="anchor" id="line-14-2"></span><span class="anchor" id="line-15-2"></span>

There's one more step, though. We need to make sure that the msg files are turned into source code for C++, Python, and other languages:<span class="anchor" id="line-16-2"></span><span class="anchor" id="line-17-2"></span>

Open <tt class="backtick">package.xml</tt>, and make sure these two lines are in it and [uncommented](http://www.htmlhelp.com/reference/wilbur/misc/comment.html):<span class="anchor" id="line-18-1"></span><span class="anchor" id="line-19-1"></span><span class="anchor" id="line-20-1"></span><span class="anchor" id="line-21-1"></span>

<pre><span class="anchor" id="line-1-7"></span>  <build_depend>message_generation</build_depend>
<span class="anchor" id="line-2-7"></span>  <run_depend>message_runtime</run_depend></pre>

<span class="anchor" id="line-22-1"></span>

Note that at build time, we need "message_generation", while at runtime, we only need "message_runtime".<span class="anchor" id="line-23-1"></span><span class="anchor" id="line-24-1"></span>

Open <tt class="backtick">CMakeLists.txt</tt> in your favorite text editor ([rosed](/ROS/Tutorials/UsingRosEd) from the previous tutorial is a good option).<span class="anchor" id="line-25-1"></span><span class="anchor" id="line-26-1"></span>

Add the <tt class="backtick">message_generation</tt> dependency to the <tt class="backtick">find_package</tt> call which already exists in your <tt class="backtick">CMakeLists.txt</tt> so that you can generate messages. You can do this by simply adding <tt class="backtick">message_generation</tt> to the list of <tt class="backtick">COMPONENTS</tt> such that it looks like this:<span class="anchor" id="line-27-1"></span><span class="anchor" id="line-28-1"></span>

<span class="anchor" id="line-29-1"></span><span class="anchor" id="line-30-1"></span><span class="anchor" id="line-31-1"></span><span class="anchor" id="line-32-1"></span><span class="anchor" id="line-33-1"></span><span class="anchor" id="line-34-1"></span><span class="anchor" id="line-35-1"></span><span class="anchor" id="line-36-1"></span>

<pre><span class="anchor" id="line-1-8"></span># Do not just add this to your CMakeLists.txt, modify the existing text to add message_generation before the closing parenthesis
<span class="anchor" id="line-2-8"></span>find_package(catkin REQUIRED COMPONENTS
<span class="anchor" id="line-3-7"></span>   roscpp
<span class="anchor" id="line-4-6"></span>   rospy
<span class="anchor" id="line-5-3"></span>   std_msgs
<span class="anchor" id="line-6-3"></span>   message_generation
<span class="anchor" id="line-7-3"></span>)</pre>

<span class="anchor" id="line-37-1"></span>

You may notice that sometimes your project builds fine even if you did not call <tt class="backtick">find_package</tt> with all dependencies. This is because catkin combines all your projects into one, so if an earlier project calls <tt class="backtick">find_package</tt>, yours is configured with the same values. But forgetting the call means your project can easily break when built in isolation.<span class="anchor" id="line-38-1"></span><span class="anchor" id="line-39-1"></span>

Also make sure you export the message runtime dependency.<span class="anchor" id="line-40-1"></span><span class="anchor" id="line-41-1"></span><span class="anchor" id="line-42-1"></span><span class="anchor" id="line-43-1"></span><span class="anchor" id="line-44-1"></span><span class="anchor" id="line-45-1"></span>

<pre><span class="anchor" id="line-1-9"></span>catkin_package(
<span class="anchor" id="line-2-9"></span>  ...
<span class="anchor" id="line-3-8"></span>  CATKIN_DEPENDS message_runtime ...
<span class="anchor" id="line-4-7"></span>  ...)</pre>

<span class="anchor" id="line-46-1"></span>

Find the following block of code:<span class="anchor" id="line-47-1"></span><span class="anchor" id="line-48-1"></span><span class="anchor" id="line-49-1"></span><span class="anchor" id="line-50-1"></span><span class="anchor" id="line-51-1"></span><span class="anchor" id="line-52-1"></span><span class="anchor" id="line-53-1"></span>

<pre><span class="anchor" id="line-1-10"></span># add_message_files(
<span class="anchor" id="line-2-10"></span>#   FILES
<span class="anchor" id="line-3-9"></span>#   Message1.msg
<span class="anchor" id="line-4-8"></span>#   Message2.msg
<span class="anchor" id="line-5-4"></span># )</pre>

<span class="anchor" id="line-54-1"></span><span class="anchor" id="line-55-1"></span>

Uncomment it by removing the <tt class="backtick">#</tt> symbols and then replace the stand in <tt class="backtick">Message*.msg</tt> files with your <tt class="backtick">.msg</tt> file, such that it looks like this:<span class="anchor" id="line-56-1"></span><span class="anchor" id="line-57-1"></span>

<span class="anchor" id="line-58-1"></span><span class="anchor" id="line-59-1"></span><span class="anchor" id="line-60-1"></span><span class="anchor" id="line-61-1"></span><span class="anchor" id="line-62-1"></span>

<pre><span class="anchor" id="line-1-11"></span>add_message_files(
<span class="anchor" id="line-2-11"></span>  FILES
<span class="anchor" id="line-3-10"></span>  Num.msg
<span class="anchor" id="line-4-9"></span>)</pre>

<span class="anchor" id="line-63-1"></span><span class="anchor" id="line-64-1"></span>

By adding the .msg files manually, we make sure that CMake knows when it has to reconfigure the project after you add other .msg files.<span class="anchor" id="line-65-1"></span><span class="anchor" id="line-66-1"></span>

Now we must ensure the <tt class="backtick">generate_messages()</tt> function is called.<span class="anchor" id="line-67-1"></span><span class="anchor" id="line-68-1"></span>

_For ROS Hydro and later,_ you need to uncomment these lines:<span class="anchor" id="line-69-1"></span><span class="anchor" id="line-70-1"></span><span class="anchor" id="line-71-1"></span><span class="anchor" id="line-72-1"></span><span class="anchor" id="line-73-1"></span><span class="anchor" id="line-74-1"></span>

<pre><span class="anchor" id="line-1-12"></span># generate_messages(
<span class="anchor" id="line-2-12"></span>#   DEPENDENCIES
<span class="anchor" id="line-3-11"></span>#   std_msgs
<span class="anchor" id="line-4-10"></span># )</pre>

<span class="anchor" id="line-75-1"></span>

*   so it looks like:<span class="anchor" id="line-76-1"></span><span class="anchor" id="line-77-1"></span><span class="anchor" id="line-78-1"></span><span class="anchor" id="line-79-1"></span><span class="anchor" id="line-80-1"></span><span class="anchor" id="line-81-1"></span>

    <pre><span class="anchor" id="line-1-13"></span>generate_messages(
    <span class="anchor" id="line-2-13"></span>  DEPENDENCIES
    <span class="anchor" id="line-3-12"></span>  std_msgs
    <span class="anchor" id="line-4-11"></span>)</pre>

    <span class="anchor" id="line-82-1"></span>

_In earlier versions,_ you may just need to uncomment one line:<span class="anchor" id="line-83-1"></span><span class="anchor" id="line-84-1"></span><span class="anchor" id="line-85-1"></span>

<pre><span class="anchor" id="line-1-14"></span>generate_messages()</pre>

</div>

<span class="anchor" id="line-150"></span>

<span class="anchor" id="line-151"></span><span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span><span class="anchor" id="line-154"></span><span class="anchor" id="line-155"></span><span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span><span class="anchor" id="line-158"></span><span class="anchor" id="line-159"></span><span class="anchor" id="line-160"></span><span class="anchor" id="line-161"></span><span class="anchor" id="line-162"></span><span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span><span class="anchor" id="line-165"></span><span class="anchor" id="line-166"></span><span class="anchor" id="line-167"></span><span class="anchor" id="line-168"></span><span class="anchor" id="line-169"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-15"></span>

<span class="anchor" id="line-2-14"></span><span class="anchor" id="line-3-13"></span><span class="anchor" id="line-4-12"></span><span class="anchor" id="line-5-5"></span>

<pre><span class="anchor" id="line-1-16"></span>$ roscd beginner_tutorials
<span class="anchor" id="line-2-15"></span>$ mkdir msg
<span class="anchor" id="line-3-14"></span>$ echo "int64 num" > msg/Num.msg</pre>

<span class="anchor" id="line-6-4"></span><span class="anchor" id="line-7-4"></span>

The example above is the simplest, where the <tt class="backtick">.msg</tt> file contains only 1 line. You can, of course, create more complex files by adding multiple elements per line like this:<span class="anchor" id="line-8-3"></span><span class="anchor" id="line-9-3"></span><span class="anchor" id="line-10-3"></span><span class="anchor" id="line-11-3"></span><span class="anchor" id="line-12-3"></span><span class="anchor" id="line-13-3"></span>

<pre><span class="anchor" id="line-1-17"></span>string first_name
<span class="anchor" id="line-2-16"></span>string last_name
<span class="anchor" id="line-3-15"></span>uint8 age
<span class="anchor" id="line-4-13"></span>uint32 score</pre>

<span class="anchor" id="line-14-3"></span><span class="anchor" id="line-15-3"></span>

There's one more step, though. We need to make sure that the msg files are turned into source code for C++, Python, and other languages. Open <tt class="backtick">CMakeLists.txt</tt> in your favorite text editor ([rosed](/ROS/Tutorials/UsingRosEd) from the previous tutorial is a good option) and remove <tt class="backtick">#</tt> to uncomment the following line:<span class="anchor" id="line-16-3"></span><span class="anchor" id="line-17-3"></span><span class="anchor" id="line-18-2"></span>

<pre><span class="anchor" id="line-1-18"></span># rosbuild_genmsg()</pre>

</div>

<span class="anchor" id="line-170"></span>

<span class="anchor" id="line-171"></span><span class="anchor" id="line-172"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-19"></span>

Now you're ready to generate source files from your msg definition. If you want to do so right now, skip next sections to [Common step for msg and srv](/ROS/Tutorials/CreatingMsgAndSrv#Common_step_for_msg_and_srv).

</div>

<span class="anchor" id="line-173"></span>

### Using rosmsg

<span class="anchor" id="line-174"></span>

That's all you need to do to create a msg. Let's make sure that ROS can see it using the <tt class="backtick">rosmsg show</tt> command.<span class="anchor" id="line-175"></span><span class="anchor" id="line-176"></span>

Usage:<span class="anchor" id="line-177"></span><span class="anchor" id="line-178"></span>

<span class="anchor" id="line-179"></span><span class="anchor" id="line-180"></span>

<pre><span class="anchor" id="line-1-20"></span>$ rosmsg show [message type]</pre>

<span class="anchor" id="line-181"></span>

Example:<span class="anchor" id="line-182"></span><span class="anchor" id="line-183"></span>

<span class="anchor" id="line-184"></span><span class="anchor" id="line-185"></span>

<pre><span class="anchor" id="line-1-21"></span>$ rosmsg show beginner_tutorials/Num</pre>

<span class="anchor" id="line-186"></span>

You will see:<span class="anchor" id="line-187"></span><span class="anchor" id="line-188"></span>

*   <span class="anchor" id="line-189"></span><span class="anchor" id="line-190"></span>

    <pre><span class="anchor" id="line-1-22"></span>int64 num</pre>

    <span class="anchor" id="line-191"></span><span class="anchor" id="line-192"></span>

In the previous example, the message type consists of two parts:<span class="anchor" id="line-193"></span><span class="anchor" id="line-194"></span>

*   <tt>beginner_tutorials</tt> -- the package where the message is defined<span class="anchor" id="line-195"></span>

*   <tt>Num</tt> -- The name of the msg <tt>Num</tt>.<span class="anchor" id="line-196"></span><span class="anchor" id="line-197"></span>

If you can't remember which Package a msg is in, you can leave out the package name. Try:<span class="anchor" id="line-198"></span><span class="anchor" id="line-199"></span>

<span class="anchor" id="line-200"></span><span class="anchor" id="line-201"></span>

<pre><span class="anchor" id="line-1-23"></span>$ rosmsg show Num</pre>

<span class="anchor" id="line-202"></span>

You will see:<span class="anchor" id="line-203"></span><span class="anchor" id="line-204"></span>

*   <span class="anchor" id="line-205"></span><span class="anchor" id="line-206"></span><span class="anchor" id="line-207"></span>

    <pre><span class="anchor" id="line-1-24"></span>[beginner_tutorials/Num]:
    <span class="anchor" id="line-2-17"></span>int64 num</pre>

    <span class="anchor" id="line-208"></span><span class="anchor" id="line-209"></span>

### Using srv

<span class="anchor" id="line-210"></span>

#### Creating a srv

<span class="anchor" id="line-211"></span>

Let's use the package we just created to create a srv:<span class="anchor" id="line-212"></span><span class="anchor" id="line-213"></span>

<span class="anchor" id="line-214"></span><span class="anchor" id="line-215"></span><span class="anchor" id="line-216"></span>

<pre><span class="anchor" id="line-1-25"></span>$ roscd beginner_tutorials
<span class="anchor" id="line-2-18"></span>$ mkdir srv</pre>

<span class="anchor" id="line-217"></span>

Instead of creating a new srv definition by hand, we will copy an existing one from another package.<span class="anchor" id="line-218"></span><span class="anchor" id="line-219"></span>

For that, <tt class="backtick">roscp</tt> is a useful commandline tool for copying files from one package to another.<span class="anchor" id="line-220"></span><span class="anchor" id="line-221"></span>

Usage:<span class="anchor" id="line-222"></span><span class="anchor" id="line-223"></span>

<span class="anchor" id="line-224"></span><span class="anchor" id="line-225"></span>

<pre><span class="anchor" id="line-1-26"></span>$ roscp [package_name] [file_to_copy_path] [copy_path]</pre>

<span class="anchor" id="line-226"></span>

Now we can copy a service from the [rospy_tutorials](/rospy_tutorials) package:<span class="anchor" id="line-227"></span><span class="anchor" id="line-228"></span>

<span class="anchor" id="line-229"></span><span class="anchor" id="line-230"></span>

<pre><span class="anchor" id="line-1-27"></span>$ roscp rospy_tutorials AddTwoInts.srv srv/AddTwoInts.srv</pre>

<span class="anchor" id="line-231"></span>

There's one more step, though. We need to make sure that the srv files are turned into source code for C++, Python, and other languages.<span class="anchor" id="line-232"></span><span class="anchor" id="line-233"></span>

<span class="anchor" id="line-234"></span><span class="anchor" id="line-235"></span><span class="anchor" id="line-236"></span><span class="anchor" id="line-237"></span><span class="anchor" id="line-238"></span><span class="anchor" id="line-239"></span><span class="anchor" id="line-240"></span><span class="anchor" id="line-241"></span><span class="anchor" id="line-242"></span><span class="anchor" id="line-243"></span><span class="anchor" id="line-244"></span><span class="anchor" id="line-245"></span><span class="anchor" id="line-246"></span><span class="anchor" id="line-247"></span><span class="anchor" id="line-248"></span><span class="anchor" id="line-249"></span><span class="anchor" id="line-250"></span><span class="anchor" id="line-251"></span><span class="anchor" id="line-252"></span><span class="anchor" id="line-253"></span><span class="anchor" id="line-254"></span><span class="anchor" id="line-255"></span><span class="anchor" id="line-256"></span><span class="anchor" id="line-257"></span><span class="anchor" id="line-258"></span><span class="anchor" id="line-259"></span><span class="anchor" id="line-260"></span><span class="anchor" id="line-261"></span><span class="anchor" id="line-262"></span><span class="anchor" id="line-263"></span><span class="anchor" id="line-264"></span><span class="anchor" id="line-265"></span><span class="anchor" id="line-266"></span><span class="anchor" id="line-267"></span><span class="anchor" id="line-268"></span><span class="anchor" id="line-269"></span><span class="anchor" id="line-270"></span><span class="anchor" id="line-271"></span><span class="anchor" id="line-272"></span><span class="anchor" id="line-273"></span><span class="anchor" id="line-274"></span><span class="anchor" id="line-275"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-28"></span>

Unless you have done so already, open <tt class="backtick">package.xml</tt>, and make sure these two lines are in it and [uncommented](http://www.htmlhelp.com/reference/wilbur/misc/comment.html):<span class="anchor" id="line-2-19"></span><span class="anchor" id="line-3-16"></span><span class="anchor" id="line-4-14"></span><span class="anchor" id="line-5-6"></span>

<pre><span class="anchor" id="line-1-29"></span>  <build_depend>message_generation</build_depend>
<span class="anchor" id="line-2-20"></span>  <run_depend>message_runtime</run_depend></pre>

<span class="anchor" id="line-6-5"></span>

As before, note that at build time, we need "message_generation", while at runtime, we only need "message_runtime".<span class="anchor" id="line-7-5"></span><span class="anchor" id="line-8-4"></span>

Unless you have done so already for messages in the previous step, add the <tt class="backtick">message_generation</tt> dependency to generate messages in <tt class="backtick">CMakeLists.txt</tt>:<span class="anchor" id="line-9-4"></span><span class="anchor" id="line-10-4"></span>

<span class="anchor" id="line-11-4"></span><span class="anchor" id="line-12-4"></span><span class="anchor" id="line-13-4"></span><span class="anchor" id="line-14-4"></span><span class="anchor" id="line-15-4"></span><span class="anchor" id="line-16-4"></span><span class="anchor" id="line-17-4"></span><span class="anchor" id="line-18-3"></span>

<pre><span class="anchor" id="line-1-30"></span># Do not just add this line to your CMakeLists.txt, modify the existing line
<span class="anchor" id="line-2-21"></span>find_package(catkin REQUIRED COMPONENTS
<span class="anchor" id="line-3-17"></span>  roscpp
<span class="anchor" id="line-4-15"></span>  rospy
<span class="anchor" id="line-5-7"></span>  std_msgs
<span class="anchor" id="line-6-6"></span> message_generation
<span class="anchor" id="line-7-6"></span>)</pre>

<span class="anchor" id="line-19-2"></span>

(Despite its name, <tt class="backtick">message_generation</tt> works for both <tt class="backtick">msg</tt> and <tt class="backtick">srv</tt>.)<span class="anchor" id="line-20-2"></span><span class="anchor" id="line-21-2"></span>

Also you need the same changes to package.xml for services as for messages, so look above for the additional dependencies required.<span class="anchor" id="line-22-2"></span><span class="anchor" id="line-23-2"></span><span class="anchor" id="line-24-2"></span>

Remove <tt class="backtick">#</tt> to uncomment the following lines:<span class="anchor" id="line-25-2"></span><span class="anchor" id="line-26-2"></span><span class="anchor" id="line-27-2"></span><span class="anchor" id="line-28-2"></span><span class="anchor" id="line-29-2"></span><span class="anchor" id="line-30-2"></span><span class="anchor" id="line-31-2"></span>

<pre><span class="anchor" id="line-1-31"></span># add_service_files(
<span class="anchor" id="line-2-22"></span>#   FILES
<span class="anchor" id="line-3-18"></span>#   Service1.srv
<span class="anchor" id="line-4-16"></span>#   Service2.srv
<span class="anchor" id="line-5-8"></span># )</pre>

<span class="anchor" id="line-32-2"></span><span class="anchor" id="line-33-2"></span>

And replace the placeholder <tt class="backtick">Service*.srv</tt> files for your service files:<span class="anchor" id="line-34-2"></span><span class="anchor" id="line-35-2"></span>

<span class="anchor" id="line-36-2"></span><span class="anchor" id="line-37-2"></span><span class="anchor" id="line-38-2"></span><span class="anchor" id="line-39-2"></span><span class="anchor" id="line-40-2"></span>

<pre><span class="anchor" id="line-1-32"></span>add_service_files(
<span class="anchor" id="line-2-23"></span>  FILES
<span class="anchor" id="line-3-19"></span>  AddTwoInts.srv
<span class="anchor" id="line-4-17"></span>)</pre>

</div>

<span class="anchor" id="line-276"></span>

<span class="anchor" id="line-277"></span><span class="anchor" id="line-278"></span><span class="anchor" id="line-279"></span><span class="anchor" id="line-280"></span><span class="anchor" id="line-281"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-33"></span>

Once again, open CMakeLists.txt and remove <tt class="backtick">#</tt> to uncomment the following line:<span class="anchor" id="line-2-24"></span><span class="anchor" id="line-3-20"></span><span class="anchor" id="line-4-18"></span>

<pre><span class="anchor" id="line-1-34"></span># rosbuild_gensrv()</pre>

</div>

<span class="anchor" id="line-282"></span>

<span class="anchor" id="line-283"></span><span class="anchor" id="line-284"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-35"></span>

Now you're ready to generate source files from your service definition. If you want to do so right now, skip next sections to [Common step for msg and srv](/ROS/Tutorials/CreatingMsgAndSrv#Common_step_for_msg_and_srv).

</div>

<span class="anchor" id="line-285"></span>

#### Using rossrv

<span class="anchor" id="line-286"></span>

That's all you need to do to create a srv. Let's make sure that ROS can see it using the <tt class="backtick">rossrv show</tt> command.<span class="anchor" id="line-287"></span><span class="anchor" id="line-288"></span>

Usage:<span class="anchor" id="line-289"></span><span class="anchor" id="line-290"></span>

<span class="anchor" id="line-291"></span><span class="anchor" id="line-292"></span>

<pre><span class="anchor" id="line-1-36"></span>$ rossrv show <service type></pre>

<span class="anchor" id="line-293"></span>

Example:<span class="anchor" id="line-294"></span><span class="anchor" id="line-295"></span>

<span class="anchor" id="line-296"></span><span class="anchor" id="line-297"></span>

<pre><span class="anchor" id="line-1-37"></span>$ rossrv show beginner_tutorials/AddTwoInts</pre>

<span class="anchor" id="line-298"></span>

You will see:<span class="anchor" id="line-299"></span><span class="anchor" id="line-300"></span>

*   <span class="anchor" id="line-301"></span><span class="anchor" id="line-302"></span><span class="anchor" id="line-303"></span><span class="anchor" id="line-304"></span><span class="anchor" id="line-305"></span>

    <pre><span class="anchor" id="line-1-38"></span>int64 a
    <span class="anchor" id="line-2-25"></span>int64 b
    <span class="anchor" id="line-3-21"></span>---
    <span class="anchor" id="line-4-19"></span>int64 sum</pre>

    <span class="anchor" id="line-306"></span><span class="anchor" id="line-307"></span>

Similar to <tt class="backtick">rosmsg</tt>, you can find service files like this without specifying package name:<span class="anchor" id="line-308"></span><span class="anchor" id="line-309"></span>

<span class="anchor" id="line-310"></span><span class="anchor" id="line-311"></span><span class="anchor" id="line-312"></span><span class="anchor" id="line-313"></span><span class="anchor" id="line-314"></span><span class="anchor" id="line-315"></span><span class="anchor" id="line-316"></span><span class="anchor" id="line-317"></span><span class="anchor" id="line-318"></span><span class="anchor" id="line-319"></span><span class="anchor" id="line-320"></span><span class="anchor" id="line-321"></span><span class="anchor" id="line-322"></span>

<pre><span class="anchor" id="line-1-39"></span>$ rossrv show AddTwoInts
<span class="anchor" id="line-2-26"></span>[beginner_tutorials/AddTwoInts]:
<span class="anchor" id="line-3-22"></span>int64 a
<span class="anchor" id="line-4-20"></span>int64 b
<span class="anchor" id="line-5-9"></span>---
<span class="anchor" id="line-6-7"></span>int64 sum
<span class="anchor" id="line-7-7"></span>
<span class="anchor" id="line-8-5"></span>[rospy_tutorials/AddTwoInts]:
<span class="anchor" id="line-9-5"></span>int64 a
<span class="anchor" id="line-10-5"></span>int64 b
<span class="anchor" id="line-11-5"></span>---
<span class="anchor" id="line-12-5"></span>int64 sum</pre>

<span class="anchor" id="line-323"></span>

### Common step for msg and srv

<span class="anchor" id="line-324"></span>

<span class="anchor" id="line-325"></span><span class="anchor" id="line-326"></span><span class="anchor" id="line-327"></span><span class="anchor" id="line-328"></span><span class="anchor" id="line-329"></span><span class="anchor" id="line-330"></span><span class="anchor" id="line-331"></span><span class="anchor" id="line-332"></span><span class="anchor" id="line-333"></span><span class="anchor" id="line-334"></span><span class="anchor" id="line-335"></span><span class="anchor" id="line-336"></span><span class="anchor" id="line-337"></span><span class="anchor" id="line-338"></span><span class="anchor" id="line-339"></span><span class="anchor" id="line-340"></span><span class="anchor" id="line-341"></span><span class="anchor" id="line-342"></span><span class="anchor" id="line-343"></span><span class="anchor" id="line-344"></span><span class="anchor" id="line-345"></span><span class="anchor" id="line-346"></span><span class="anchor" id="line-347"></span><span class="anchor" id="line-348"></span><span class="anchor" id="line-349"></span><span class="anchor" id="line-350"></span>

<div class="buildsystem catkin"><span class="anchor" id="line-1-40"></span>

Unless you have already done this in the previous steps, change in <tt class="backtick">CMakeLists.txt</tt>. :<span class="anchor" id="line-2-27"></span><span class="anchor" id="line-3-23"></span><span class="anchor" id="line-4-21"></span><span class="anchor" id="line-5-10"></span><span class="anchor" id="line-6-8"></span><span class="anchor" id="line-7-8"></span>

<pre><span class="anchor" id="line-1-41"></span># generate_messages(
<span class="anchor" id="line-2-28"></span>#   DEPENDENCIES
<span class="anchor" id="line-3-24"></span># #  std_msgs  # Or other packages containing msgs
<span class="anchor" id="line-4-22"></span># )</pre>

<span class="anchor" id="line-8-6"></span><span class="anchor" id="line-9-6"></span>

Uncomment it and add any packages you depend on which contain <tt class="backtick">.msg</tt> files that your messages use (in this case <tt class="backtick">std_msgs</tt>), such that it looks like this:<span class="anchor" id="line-10-6"></span><span class="anchor" id="line-11-6"></span>

<span class="anchor" id="line-12-6"></span><span class="anchor" id="line-13-5"></span><span class="anchor" id="line-14-5"></span><span class="anchor" id="line-15-5"></span><span class="anchor" id="line-16-5"></span>

<pre><span class="anchor" id="line-1-42"></span>generate_messages(
<span class="anchor" id="line-2-29"></span>  DEPENDENCIES
<span class="anchor" id="line-3-25"></span>  std_msgs
<span class="anchor" id="line-4-23"></span>)</pre>

<span class="anchor" id="line-17-5"></span><span class="anchor" id="line-18-4"></span>

Now that we have made some new messages we need to make our package again:<span class="anchor" id="line-19-3"></span><span class="anchor" id="line-20-3"></span>

<span class="anchor" id="line-21-3"></span><span class="anchor" id="line-22-3"></span><span class="anchor" id="line-23-3"></span><span class="anchor" id="line-24-3"></span><span class="anchor" id="line-25-3"></span>

<pre><span class="anchor" id="line-1-43"></span># In your catkin workspace
<span class="anchor" id="line-2-30"></span>$ cd ../..
<span class="anchor" id="line-3-26"></span>$ catkin_make
<span class="anchor" id="line-4-24"></span>$ cd -</pre>

</div>

<span class="anchor" id="line-351"></span>

<span class="anchor" id="line-352"></span><span class="anchor" id="line-353"></span><span class="anchor" id="line-354"></span><span class="anchor" id="line-355"></span><span class="anchor" id="line-356"></span>

<div class="buildsystem rosbuild"><span class="anchor" id="line-1-44"></span>

Now that we have made some new messages we need to make our package again:<span class="anchor" id="line-2-31"></span><span class="anchor" id="line-3-27"></span><span class="anchor" id="line-4-25"></span>

<pre><span class="anchor" id="line-1-45"></span>$ rosmake beginner_tutorials</pre>

</div>

<span class="anchor" id="line-357"></span>

Any .msg file in the msg directory will generate code for use in all supported languages. The C++ message header file will be generated in <tt class="backtick">~/catkin_ws/devel/include/beginner_tutorials/</tt>. The Python script will be created in <tt class="backtick">~/catkin_ws/devel/lib/python2.7/dist-packages/beginner_tutorials/msg</tt>. The lisp file appears in <tt class="backtick">~/catkin_ws/devel/share/common-lisp/ros/beginner_tutorials/msg/</tt>.<span class="anchor" id="line-358"></span><span class="anchor" id="line-359"></span>

The full specification for the message format is available at the [Message Description Language](/ROS/Message_Description_Language) page.<span class="anchor" id="line-360"></span><span class="anchor" id="line-361"></span>

### Getting Help

<span class="anchor" id="line-362"></span>

We've seen quite a few ROS tools already. It can be difficult to keep track of what arguments each command requires. Luckily, most ROS tools provide their own help.<span class="anchor" id="line-363"></span><span class="anchor" id="line-364"></span>

Try:<span class="anchor" id="line-365"></span><span class="anchor" id="line-366"></span>

<span class="anchor" id="line-367"></span><span class="anchor" id="line-368"></span>

<pre><span class="anchor" id="line-1-46"></span>$ rosmsg -h</pre>

<span class="anchor" id="line-369"></span>

*   You should see a list of different <tt>rosmsg</tt> subcommands.<span class="anchor" id="line-370"></span><span class="anchor" id="line-371"></span><span class="anchor" id="line-372"></span><span class="anchor" id="line-373"></span><span class="anchor" id="line-374"></span><span class="anchor" id="line-375"></span><span class="anchor" id="line-376"></span><span class="anchor" id="line-377"></span>

    <pre><span class="anchor" id="line-1-47"></span>Commands:
    <span class="anchor" id="line-2-32"></span>  rosmsg show Show message description
    <span class="anchor" id="line-3-28"></span>  rosmsg users  Find files that use message
    <span class="anchor" id="line-4-26"></span>  rosmsg md5  Display message md5sum
    <span class="anchor" id="line-5-11"></span>  rosmsg package  List messages in a package
    <span class="anchor" id="line-6-9"></span>  rosmsg packages List packages that contain messages</pre>

    <span class="anchor" id="line-378"></span><span class="anchor" id="line-379"></span>

You can also get help for subcommands<span class="anchor" id="line-380"></span><span class="anchor" id="line-381"></span>

<span class="anchor" id="line-382"></span><span class="anchor" id="line-383"></span>

<pre><span class="anchor" id="line-1-48"></span>$ rosmsg show -h</pre>

<span class="anchor" id="line-384"></span>

*   This shows the arguments that are needed for rosmsg show:<span class="anchor" id="line-385"></span><span class="anchor" id="line-386"></span><span class="anchor" id="line-387"></span><span class="anchor" id="line-388"></span><span class="anchor" id="line-389"></span><span class="anchor" id="line-390"></span><span class="anchor" id="line-391"></span>

    <pre><span class="anchor" id="line-1-49"></span>Usage: rosmsg show [options] <message type>
    <span class="anchor" id="line-2-33"></span>
    <span class="anchor" id="line-3-29"></span>Options:
    <span class="anchor" id="line-4-27"></span>  -h, --help  show this help message and exit
    <span class="anchor" id="line-5-12"></span>  -r, --raw   show raw message text, including comments</pre>

    <span class="anchor" id="line-392"></span><span class="anchor" id="line-393"></span>

### Review

<span class="anchor" id="line-394"></span>

Lets just list some of the commands we've used so far:<span class="anchor" id="line-395"></span><span class="anchor" id="line-396"></span>

*   rospack = ros+pack(age) : provides information related to ROS packages<span class="anchor" id="line-397"></span>
*   roscd = ros+cd : **c**hanges **d**irectory to a ROS package or stack<span class="anchor" id="line-398"></span>

*   rosls = ros+ls : **l**ist**s** files in a ROS package<span class="anchor" id="line-399"></span>

*   roscp = ros+cp : **c**o**p**ies files from/to a ROS package<span class="anchor" id="line-400"></span>

*   rosmsg = ros+msg : provides information related to ROS message definitions<span class="anchor" id="line-401"></span>
*   rossrv = ros+srv : provides information related to ROS service definitions<span class="anchor" id="line-402"></span>
*   catkin_make : makes (compiles) a ROS package<span class="anchor" id="line-403"></span>
    *   rosmake = ros+make : makes (compiles) a ROS package (if you're not using a catkin workspace)<span class="anchor" id="line-404"></span><span class="anchor" id="line-405"></span>

### Next Tutorial

<span class="anchor" id="line-406"></span>

Now that you've made a new ROS msg and srv, let's look at writing a simple publisher and subscriber [(python)](/ROS/Tutorials/WritingPublisherSubscriber%28python%29) [(c++)](/ROS/Tutorials/WritingPublisherSubscriber%28c%2B%2B%29).<span class="anchor" id="line-407"></span><span class="anchor" id="line-408"></span>

<span class="anchor" id="line-409"></span>

<span class="anchor" id="line-410"></span>

<span class="anchor" id="line-411"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/CreatingMsgAndSrv (last edited 2015-08-04 18:22:11 by <span title="William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]">[WilliamWoodall](/WilliamWoodall "William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]")</span>)
