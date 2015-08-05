<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [UnderstandingNodes](/action/fullsearch/ROS/Tutorials/UnderstandingNodes?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUnderstandingNodes%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [building a ROS package](/ROS/Tutorials/BuildingPackages).</td>

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

## Understanding ROS Nodes

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial introduces ROS graph concepts and discusses the use of [roscore](/roscore), [rosnode](/rosnode), and [rosrun](/rosrun) commandline tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Understanding ROS topics](/ROS/Tutorials/UnderstandingTopics)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<div class="table-of-contents">

Contents

1.  [Prerequisites](#Prerequisites)
2.  [Quick Overview of Graph Concepts](#Quick_Overview_of_Graph_Concepts)
3.  [Nodes](#Nodes)
4.  [Client Libraries](#Client_Libraries)
5.  [roscore](#roscore)
6.  [Using rosnode](#Using_rosnode)
7.  [Using rosrun](#Using_rosrun)
8.  [Review](#Review)

</div>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

### Prerequisites

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

For this tutorial we will use a lightweight simulator, please install it using<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<pre><span class="anchor" id="line-1-2"></span>$ sudo apt-get install ros-<distro>-ros-tutorials</pre>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

Replace '<distro>' with the name of your ROS distribution (e.g. hydro, groovy, electric, fuerte etc.)<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

### Quick Overview of Graph Concepts

<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

*   [Nodes](/Nodes): A node is an executable that uses ROS to communicate with other nodes.<span class="anchor" id="line-33"></span>

*   [Messages](/Messages): ROS data type used when subscribing or publishing to a topic.<span class="anchor" id="line-34"></span>

*   [Topics](/Topics): Nodes can _publish_ messages to a topic as well as _subscribe_ to a topic to receive messages.<span class="anchor" id="line-35"></span>

*   [Master](/Master): Name service for ROS (i.e. helps nodes find each other)<span class="anchor" id="line-36"></span>

*   [rosout](/rosout): ROS equivalent of stdout/stderr<span class="anchor" id="line-37"></span>

*   [roscore](/roscore): Master + rosout + parameter server (parameter server will be introduced later)<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

### Nodes

<span class="anchor" id="line-40"></span>

A node really isn't much more than an executable file within a ROS package. ROS nodes use a ROS client library to communicate with other nodes. Nodes can publish or subscribe to a Topic. Nodes can also provide or use a Service.<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

### Client Libraries

<span class="anchor" id="line-43"></span>

ROS client libraries allow nodes written in different programming languages to communicate:<span class="anchor" id="line-44"></span>

*   rospy = python client library<span class="anchor" id="line-45"></span>
*   roscpp = c++ client library<span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span>

### roscore

<span class="anchor" id="line-48"></span>

<tt>roscore</tt> is the first thing you should run when using ROS.<span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span>

Please run:<span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span>

<pre><span class="anchor" id="line-1-3"></span>$ roscore</pre>

<span class="anchor" id="line-54"></span>

You will see something similar to:<span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

*   <span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span>

    <pre><span class="anchor" id="line-1-4"></span>... logging to ~/.ros/log/9cf88ce4-b14d-11df-8a75-00251148e8cf/roslaunch-machine_name-13039.log
    <span class="anchor" id="line-2-2"></span>Checking log directory for disk usage. This may take awhile.
    <span class="anchor" id="line-3-2"></span>Press Ctrl-C to interrupt
    <span class="anchor" id="line-4-2"></span>Done checking log file disk usage. Usage is <1GB.
    <span class="anchor" id="line-5-2"></span>
    <span class="anchor" id="line-6-2"></span>started roslaunch server http://machine_name:33919/
    <span class="anchor" id="line-7-2"></span>ros_comm version 1.4.7
    <span class="anchor" id="line-8-2"></span>
    <span class="anchor" id="line-9-2"></span>SUMMARY
    <span class="anchor" id="line-10-2"></span>========
    <span class="anchor" id="line-11-2"></span>
    <span class="anchor" id="line-12-2"></span>PARAMETERS
    <span class="anchor" id="line-13-2"></span> * /rosversion
    <span class="anchor" id="line-14-2"></span> * /rosdistro
    <span class="anchor" id="line-15-2"></span>
    <span class="anchor" id="line-16-2"></span>NODES
    <span class="anchor" id="line-17-2"></span>
    <span class="anchor" id="line-18-1"></span>auto-starting new master
    <span class="anchor" id="line-19-1"></span>process[master]: started with pid [13054]
    <span class="anchor" id="line-20-1"></span>ROS_MASTER_URI=http://machine_name:11311/
    <span class="anchor" id="line-21-1"></span>
    <span class="anchor" id="line-22-1"></span>setting /run_id to 9cf88ce4-b14d-11df-8a75-00251148e8cf
    <span class="anchor" id="line-23-1"></span>process[rosout-1]: started with pid [13067]
    <span class="anchor" id="line-24-1"></span>started core service [/rosout]</pre>

    <span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span>

If <tt class="backtick">roscore</tt> does not initialize, you probably have a network configuration issue. See [Network Setup - Single Machine Configuration](http://www.ros.org/wiki/ROS/NetworkSetup#Single_machine_configuration)<span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span>

If <tt class="backtick">roscore</tt> does not initialize and sends a message about lack of permissions, probably the <tt class="backtick">~/.ros</tt> folder is owned by <tt class="backtick">root</tt>, change recursively the ownership of that folder with:<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

<pre><span class="anchor" id="line-1-5"></span>$ sudo chown -R <your_username> ~/.ros</pre>

<span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span>

### Using rosnode

<span class="anchor" id="line-92"></span>

Open up a **new terminal**, and let's use **rosnode** to see what running <tt class="backtick">roscore</tt> did...<span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span>

<span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span>

<div class="blue solid"><span class="anchor" id="line-1-6"></span>

**Note:** When opening a new terminal your environment is reset and your <tt class="backtick">~/.bashrc</tt> file is sourced. If you have trouble running commands like <tt class="backtick">rosnode</tt> then you might need to add some environment setup files to your <tt class="backtick">~/.bashrc</tt> or manually re-source them.

</div>

<span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span>

<tt class="backtick">rosnode</tt> displays information about the ROS nodes that are currently running. The <tt class="backtick">rosnode list</tt> command lists these active nodes:<span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span>

<span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span>

<pre><span class="anchor" id="line-1-7"></span>$ rosnode list</pre>

<span class="anchor" id="line-103"></span>

*   You will see:<span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span>
*   <span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span>

    <pre><span class="anchor" id="line-1-8"></span>/rosout</pre>

    <span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span>

This showed us that there is only one node running: [rosout](/rosout). This is always running as it collects and logs nodes' debugging output.<span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span>

The <tt class="backtick">rosnode info</tt> command returns information about a specific node.<span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span>

<span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span>

<pre><span class="anchor" id="line-1-9"></span>$ rosnode info /rosout</pre>

<span class="anchor" id="line-116"></span>

This gave us some more information about <tt class="backtick">rosout</tt>, such as the fact that it publishes <tt class="backtick">/rosout_agg</tt>.<span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span>

*   <span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span>

    <pre><span class="anchor" id="line-1-10"></span>------------------------------------------------------------------------
    <span class="anchor" id="line-2-3"></span>Node [/rosout]
    <span class="anchor" id="line-3-3"></span>Publications:
    <span class="anchor" id="line-4-3"></span> * /rosout_agg [rosgraph_msgs/Log]
    <span class="anchor" id="line-5-3"></span>
    <span class="anchor" id="line-6-3"></span>Subscriptions:
    <span class="anchor" id="line-7-3"></span> * /rosout [unknown type]
    <span class="anchor" id="line-8-3"></span>
    <span class="anchor" id="line-9-3"></span>Services:
    <span class="anchor" id="line-10-3"></span> * /rosout/set_logger_level
    <span class="anchor" id="line-11-3"></span> * /rosout/get_loggers
    <span class="anchor" id="line-12-3"></span>
    <span class="anchor" id="line-13-3"></span>contacting node http://machine_name:54614/ ...
    <span class="anchor" id="line-14-3"></span>Pid: 5092</pre>

    <span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span>

Now, let's see some more nodes. For this, we're going to use <tt class="backtick">rosrun</tt> to bring up another node.<span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span>

### Using rosrun

<span class="anchor" id="line-138"></span>

<tt class="backtick">rosrun</tt> allows you to use the package name to directly run a node within a package (without having to know the package path).<span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span>

Usage:<span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span>

<span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span>

<pre><span class="anchor" id="line-1-11"></span>$ rosrun [package_name] [node_name]</pre>

<span class="anchor" id="line-145"></span>

So now we can run the turtlesim_node in the turtlesim package.<span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span>

Then, in a **new terminal**:<span class="anchor" id="line-148"></span><span class="anchor" id="line-149"></span>

<span class="anchor" id="line-150"></span><span class="anchor" id="line-151"></span>

<pre><span class="anchor" id="line-1-12"></span>$ rosrun turtlesim turtlesim_node</pre>

<span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span>

You will see the turtlesim window:<span class="anchor" id="line-154"></span><span class="anchor" id="line-155"></span>

*   ![turtlesim.png](/ROS/Tutorials/UnderstandingNodes?action=AttachFile&do=get&target=turtlesim.png "turtlesim.png")<span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span>

**NOTE:** The turtle may look different in your turtlesim window. Don't worry about it - there are [many types of turtle](/Distributions#Current_Distribution_Releases) and yours is a surprise!<span class="anchor" id="line-158"></span><span class="anchor" id="line-159"></span><span class="anchor" id="line-160"></span>

In a **new terminal**:<span class="anchor" id="line-161"></span><span class="anchor" id="line-162"></span>

<span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span>

<pre><span class="anchor" id="line-1-13"></span>$ rosnode list</pre>

<span class="anchor" id="line-165"></span>

You will see something similar to:<span class="anchor" id="line-166"></span><span class="anchor" id="line-167"></span>

*   <span class="anchor" id="line-168"></span><span class="anchor" id="line-169"></span><span class="anchor" id="line-170"></span>

    <pre><span class="anchor" id="line-1-14"></span>/rosout
    <span class="anchor" id="line-2-4"></span>/turtlesim</pre>

    <span class="anchor" id="line-171"></span><span class="anchor" id="line-172"></span>

One powerful feature of ROS is that you can reassign Names from the command-line.<span class="anchor" id="line-173"></span><span class="anchor" id="line-174"></span>

Close the turtlesim window to stop the node (or go back to the <tt class="backtick">rosrun turtlesim</tt> terminal and use <tt class="backtick">ctrl-C</tt>). Now let's re-run it, but this time use a [Remapping Argument](/Remapping%20Arguments) to change the node's name:<span class="anchor" id="line-175"></span><span class="anchor" id="line-176"></span>

<span class="anchor" id="line-177"></span><span class="anchor" id="line-178"></span>

<pre><span class="anchor" id="line-1-15"></span>$ rosrun turtlesim turtlesim_node __name:=my_turtle</pre>

<span class="anchor" id="line-179"></span>

Now, if we go back and use <tt class="backtick">rosnode list</tt>:<span class="anchor" id="line-180"></span><span class="anchor" id="line-181"></span>

<span class="anchor" id="line-182"></span><span class="anchor" id="line-183"></span>

<pre><span class="anchor" id="line-1-16"></span>$ rosnode list</pre>

<span class="anchor" id="line-184"></span>

*   You will see something similar to:<span class="anchor" id="line-185"></span><span class="anchor" id="line-186"></span>
*   <span class="anchor" id="line-187"></span><span class="anchor" id="line-188"></span><span class="anchor" id="line-189"></span>

    <pre><span class="anchor" id="line-1-17"></span>/rosout
    <span class="anchor" id="line-2-5"></span>/my_turtle</pre>

    <span class="anchor" id="line-190"></span><span class="anchor" id="line-191"></span>

<span class="anchor" id="line-192"></span><span class="anchor" id="line-193"></span><span class="anchor" id="line-194"></span><span class="anchor" id="line-195"></span>

<div class="blue solid"><span class="anchor" id="line-1-18"></span>

Note: If you still see /turtlesim in the list, it might mean that you stopped the node in the terminal using <tt class="backtick">ctrl-C</tt> instead of closing the window, or that you don't have the $ROS_HOSTNAME environment variable defined as described in [Network Setup - Single Machine Configuration](http://www.ros.org/wiki/ROS/NetworkSetup#Single_machine_configuration). You can try cleaning the rosnode list with: <span class="anchor" id="line-2-6"></span>$ rosnode cleanup

</div>

<span class="anchor" id="line-196"></span><span class="anchor" id="line-197"></span><span class="anchor" id="line-198"></span>

We see our new <tt class="backtick">/my_turtle</tt> node. Let's use another <tt class="backtick">rosnode</tt> command, <tt class="backtick">ping</tt>, to test that it's up:<span class="anchor" id="line-199"></span><span class="anchor" id="line-200"></span>

<span class="anchor" id="line-201"></span><span class="anchor" id="line-202"></span>

<pre><span class="anchor" id="line-1-19"></span>$ rosnode ping my_turtle</pre>

<span class="anchor" id="line-203"></span>

*   <span class="anchor" id="line-204"></span><span class="anchor" id="line-205"></span><span class="anchor" id="line-206"></span><span class="anchor" id="line-207"></span><span class="anchor" id="line-208"></span><span class="anchor" id="line-209"></span><span class="anchor" id="line-210"></span>

    <pre><span class="anchor" id="line-1-20"></span>rosnode: node is [/my_turtle]
    <span class="anchor" id="line-2-7"></span>pinging /my_turtle with a timeout of 3.0s
    <span class="anchor" id="line-3-4"></span>xmlrpc reply from http://aqy:42235/     time=1.152992ms
    <span class="anchor" id="line-4-4"></span>xmlrpc reply from http://aqy:42235/     time=1.120090ms
    <span class="anchor" id="line-5-4"></span>xmlrpc reply from http://aqy:42235/     time=1.700878ms
    <span class="anchor" id="line-6-4"></span>xmlrpc reply from http://aqy:42235/     time=1.127958ms</pre>

    <span class="anchor" id="line-211"></span><span class="anchor" id="line-212"></span>

### Review

<span class="anchor" id="line-213"></span>

What was covered:<span class="anchor" id="line-214"></span>

*   roscore = ros+core : master (provides name service for ROS) + rosout (stdout/stderr) + parameter server (parameter server will be introduced later)<span class="anchor" id="line-215"></span>
*   rosnode = ros+node : ROS tool to get information about a node.<span class="anchor" id="line-216"></span>
*   rosrun = ros+run : runs a node from a given package.<span class="anchor" id="line-217"></span><span class="anchor" id="line-218"></span><span class="anchor" id="line-219"></span>

Now that you understand how ROS nodes work, let's look at [how ROS topics work](/ROS/Tutorials/UnderstandingTopics). Also, feel free to press <tt class="backtick">Ctrl-C</tt> to stop turtlesim_node.<span class="anchor" id="line-220"></span><span class="anchor" id="line-221"></span>

<span class="anchor" id="line-222"></span>

<span class="anchor" id="line-223"></span>

<span class="anchor" id="line-224"></span>

<span class="anchor" id="line-225"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/UnderstandingNodes (last edited 2014-03-02 23:32:58 by <span title="CoryCross @ localhost[127.0.0.1]">[CoryCross](/CoryCross "CoryCross @ localhost[127.0.0.1]")</span>)
