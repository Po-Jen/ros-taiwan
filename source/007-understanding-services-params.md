<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [UnderstandingServicesParams](/action/fullsearch/ROS/Tutorials/UnderstandingServicesParams?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUnderstandingServicesParams%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [understanding ROS topics](/ROS/Tutorials/UnderstandingTopics).</td>

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

## Understanding ROS Services and Parameters

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial introduces ROS services, and parameters as well as using the [rosservice](/rosservice) and [rosparam](/rosparam) commandline tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Using rqt_console and roslaunch](/ROS/Tutorials/UsingRqtconsoleRoslaunch)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<div class="table-of-contents">

Contents

1.  [ROS Services](#ROS_Services)
2.  [Using rosservice](#Using_rosservice)
    1.  [rosservice list](#rosservice_list)
    2.  [rosservice type](#rosservice_type)
    3.  [rosservice call](#rosservice_call)
3.  [Using rosparam](#Using_rosparam)
    1.  [rosparam list](#rosparam_list)
    2.  [rosparam set and rosparam get](#rosparam_set_and_rosparam_get)
    3.  [rosparam dump and rosparam load](#rosparam_dump_and_rosparam_load)

</div>

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

Assuming your <tt class="backtick">turtlesim_node</tt> is still running from the last tutorial, let's look at what services the turtlesim provides:<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

### ROS Services

<span class="anchor" id="line-26"></span>

Services are another way that nodes can communicate with each other. Services allow nodes to send a **request** and receive a **response**.<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

### Using rosservice

<span class="anchor" id="line-29"></span>

<tt class="backtick">rosservice</tt> can easily attach to ROS's client/service framework with services. <tt class="backtick">rosservice</tt> has many commands that can be used on topics, as shown below:<span class="anchor" id="line-30"></span><span class="anchor" id="line-31"></span>

Usage:<span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span>

<pre><span class="anchor" id="line-1-2"></span>rosservice list         print information about active services
<span class="anchor" id="line-2-2"></span>rosservice call         call the service with the provided args
<span class="anchor" id="line-3-2"></span>rosservice type         print service type
<span class="anchor" id="line-4-2"></span>rosservice find         find services by service type
<span class="anchor" id="line-5-2"></span>rosservice uri          print service ROSRPC uri</pre>

<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span>

#### rosservice list

<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

<span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span>

<pre><span class="anchor" id="line-1-3"></span>$ rosservice list</pre>

<span class="anchor" id="line-45"></span>

The <tt class="backtick">list</tt> command shows us that the turtlesim node provides nine services: <tt class="backtick">reset</tt>, <tt class="backtick">clear</tt>, <tt class="backtick">spawn</tt>, <tt class="backtick">kill</tt>, <tt class="backtick">turtle1/set_pen</tt>, <tt class="backtick">/turtle1/teleport_absolute</tt>, <tt class="backtick">/turtle1/teleport_relative</tt>, <tt class="backtick">turtlesim/get_loggers</tt>, and <tt class="backtick">turtlesim/set_logger_level</tt>. There are also two services related to the separate <tt class="backtick">rosout</tt> node: <tt class="backtick">/rosout/get_loggers</tt> and <tt class="backtick">/rosout/set_logger_level</tt>.<span class="anchor" id="line-46"></span>

*   <span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span>

    <pre><span class="anchor" id="line-1-4"></span>/clear
    <span class="anchor" id="line-2-3"></span>/kill
    <span class="anchor" id="line-3-3"></span>/reset
    <span class="anchor" id="line-4-3"></span>/rosout/get_loggers
    <span class="anchor" id="line-5-3"></span>/rosout/set_logger_level
    <span class="anchor" id="line-6-2"></span>/spawn
    <span class="anchor" id="line-7-2"></span>/teleop_turtle/get_loggers
    <span class="anchor" id="line-8-2"></span>/teleop_turtle/set_logger_level
    <span class="anchor" id="line-9-2"></span>/turtle1/set_pen
    <span class="anchor" id="line-10-2"></span>/turtle1/teleport_absolute
    <span class="anchor" id="line-11-2"></span>/turtle1/teleport_relative
    <span class="anchor" id="line-12-2"></span>/turtlesim/get_loggers
    <span class="anchor" id="line-13-2"></span>/turtlesim/set_logger_level</pre>

    <span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span>

Let's look more closely at the <tt class="backtick">clear</tt> service using <tt class="backtick">rosservice type</tt>:<span class="anchor" id="line-64"></span>

#### rosservice type

<span class="anchor" id="line-65"></span>

Usage:<span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span>

<pre><span class="anchor" id="line-1-5"></span>rosservice type [service]</pre>

<span class="anchor" id="line-69"></span>

Let's find out what type the clear service is:<span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

<pre><span class="anchor" id="line-1-6"></span>$ rosservice type clear</pre>

<span class="anchor" id="line-73"></span>

*   <span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span>

    <pre><span class="anchor" id="line-1-7"></span>std_srvs/Empty</pre>

    <span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span>

This service is empty, this means when the service call is made it takes no arguments (i.e. it sends no data when making a **request** and receives no data when receiving a **response**). Let's call this service using <tt class="backtick">rosservice call</tt>:<span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span>

#### rosservice call

<span class="anchor" id="line-80"></span>

Usage:<span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span>

<pre><span class="anchor" id="line-1-8"></span>rosservice call [service] [args]</pre>

<span class="anchor" id="line-84"></span>

Here we'll call with no arguments because the service is of type empty:<span class="anchor" id="line-85"></span><span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

<pre><span class="anchor" id="line-1-9"></span>$ rosservice call /clear</pre>

<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

This does what we expect, it clears the background of the <tt class="backtick">turtlesim_node</tt>.<span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span>

*   ![turtlesim.png](/ROS/Tutorials/UnderstandingServicesParams?action=AttachFile&do=get&target=turtlesim.png "turtlesim.png")<span class="anchor" id="line-92"></span><span class="anchor" id="line-93"></span>

Let's look at the case where the service has arguments by looking at the information for the service spawn:<span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span>

<pre><span class="anchor" id="line-1-10"></span>$ rosservice type spawn| rossrv show</pre>

<span class="anchor" id="line-97"></span>

*   <span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span>

    <pre><span class="anchor" id="line-1-11"></span>float32 x
    <span class="anchor" id="line-2-4"></span>float32 y
    <span class="anchor" id="line-3-4"></span>float32 theta
    <span class="anchor" id="line-4-4"></span>string name
    <span class="anchor" id="line-5-4"></span>---
    <span class="anchor" id="line-6-3"></span>string name</pre>

    <span class="anchor" id="line-105"></span>

This service lets us spawn a new turtle at a given location and orientation. The name field is optional, so let's not give our new turtle a name and let turtlesim create one for us.<span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span>

<pre><span class="anchor" id="line-1-12"></span>$ rosservice call spawn 2 2 0.2 ""</pre>

<span class="anchor" id="line-109"></span>

The service call returns with the name of the newly created turtle<span class="anchor" id="line-110"></span>

*   <span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span>

    <pre><span class="anchor" id="line-1-13"></span>name: turtle2</pre>

    <span class="anchor" id="line-113"></span>

Now our turtlesim should look like this:<span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span>

*   ![turtle(service).png](/ROS/Tutorials/UnderstandingServicesParams?action=AttachFile&do=get&target=turtle%28service%29.png "turtle(service).png")<span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span>

### Using rosparam

<span class="anchor" id="line-119"></span>

<tt class="backtick">rosparam</tt> allows you to store and manipulate data on the ROS [Parameter Server](/Parameter%20Server). The Parameter Server can store integers, floats, boolean, dictionaries, and lists. rosparam uses the YAML markup language for syntax. In simple cases, YAML looks very natural: <tt class="backtick">1</tt> is an integer, <tt class="backtick">1.0</tt> is a float, <tt class="backtick">one</tt> is a string, <tt class="backtick">true</tt> is a boolean, <tt class="backtick">[1, 2, 3]</tt> is a list of integers, and <tt class="backtick">{a: b, c: d}</tt> is a dictionary. <tt class="backtick">rosparam</tt> has many commands that can be used on parameters, as shown below:<span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span>

Usage:<span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span>

<pre><span class="anchor" id="line-1-14"></span>rosparam set            set parameter
<span class="anchor" id="line-2-5"></span>rosparam get            get parameter
<span class="anchor" id="line-3-5"></span>rosparam load           load parameters from file
<span class="anchor" id="line-4-5"></span>rosparam dump           dump parameters to file
<span class="anchor" id="line-5-5"></span>rosparam delete         delete parameter
<span class="anchor" id="line-6-4"></span>rosparam list           list parameter names</pre>

<span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span>

Let's look at what parameters are currently on the param server:<span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span>

#### rosparam list

<span class="anchor" id="line-134"></span>

<span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span>

<pre><span class="anchor" id="line-1-15"></span>$ rosparam list</pre>

<span class="anchor" id="line-137"></span>

Here we can see that the turtlesim node has three parameters on the param server for background color:<span class="anchor" id="line-138"></span>

*   <span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span>

    <pre><span class="anchor" id="line-1-16"></span>/background_b
    <span class="anchor" id="line-2-6"></span>/background_g
    <span class="anchor" id="line-3-6"></span>/background_r
    <span class="anchor" id="line-4-6"></span>/roslaunch/uris/aqy:51932
    <span class="anchor" id="line-5-6"></span>/run_id</pre>

    <span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span>

Let's change one of the parameter values using <tt class="backtick">rosparam set</tt>:<span class="anchor" id="line-147"></span><span class="anchor" id="line-148"></span>

#### rosparam set and rosparam get

<span class="anchor" id="line-149"></span>

Usage:<span class="anchor" id="line-150"></span><span class="anchor" id="line-151"></span><span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span>

<pre><span class="anchor" id="line-1-17"></span>rosparam set [param_name]
<span class="anchor" id="line-2-7"></span>rosparam get [param_name]</pre>

<span class="anchor" id="line-154"></span>

Here will change the red channel of the background color:<span class="anchor" id="line-155"></span><span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span>

<pre><span class="anchor" id="line-1-18"></span>$ rosparam set background_r 150</pre>

<span class="anchor" id="line-158"></span><span class="anchor" id="line-159"></span>

This changes the parameter value, now we have to call the clear service for the parameter change to take effect:<span class="anchor" id="line-160"></span><span class="anchor" id="line-161"></span><span class="anchor" id="line-162"></span>

<pre><span class="anchor" id="line-1-19"></span>$ rosservice call clear</pre>

<span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span>

Now our turtlesim looks like this:<span class="anchor" id="line-165"></span><span class="anchor" id="line-166"></span>

*   ![turtle(param).png](/ROS/Tutorials/UnderstandingServicesParams?action=AttachFile&do=get&target=turtle%28param%29.png "turtle(param).png")<span class="anchor" id="line-167"></span><span class="anchor" id="line-168"></span>

Now let's look at the values of other parameters on the param server. Let's get the value of the green background channel:<span class="anchor" id="line-169"></span><span class="anchor" id="line-170"></span><span class="anchor" id="line-171"></span>

<pre><span class="anchor" id="line-1-20"></span>$ rosparam get background_g </pre>

<span class="anchor" id="line-172"></span>

*   <span class="anchor" id="line-173"></span><span class="anchor" id="line-174"></span>

    <pre><span class="anchor" id="line-1-21"></span>86</pre>

    <span class="anchor" id="line-175"></span>

We can also use <tt class="backtick">rosparam get /</tt> to show us the contents of the entire Parameter Server.<span class="anchor" id="line-176"></span><span class="anchor" id="line-177"></span><span class="anchor" id="line-178"></span>

<pre><span class="anchor" id="line-1-22"></span>$ rosparam get /</pre>

<span class="anchor" id="line-179"></span>

*   <span class="anchor" id="line-180"></span><span class="anchor" id="line-181"></span><span class="anchor" id="line-182"></span><span class="anchor" id="line-183"></span><span class="anchor" id="line-184"></span><span class="anchor" id="line-185"></span><span class="anchor" id="line-186"></span>

    <pre><span class="anchor" id="line-1-23"></span>background_b: 255
    <span class="anchor" id="line-2-8"></span>background_g: 86
    <span class="anchor" id="line-3-7"></span>background_r: 150
    <span class="anchor" id="line-4-7"></span>roslaunch:
    <span class="anchor" id="line-5-7"></span>  uris: {'aqy:51932': 'http://aqy:51932/'}
    <span class="anchor" id="line-6-5"></span>run_id: e07ea71e-98df-11de-8875-001b21201aa8</pre>

    <span class="anchor" id="line-187"></span><span class="anchor" id="line-188"></span>

You may wish to store this in a file so that you can reload it at another time. This is easy using <tt class="backtick">rosparam</tt>:<span class="anchor" id="line-189"></span>

#### rosparam dump and rosparam load

<span class="anchor" id="line-190"></span>

Usage:<span class="anchor" id="line-191"></span><span class="anchor" id="line-192"></span><span class="anchor" id="line-193"></span><span class="anchor" id="line-194"></span>

<pre><span class="anchor" id="line-1-24"></span>rosparam dump [file_name] [namespace]
<span class="anchor" id="line-2-9"></span>rosparam load [file_name] [namespace]</pre>

<span class="anchor" id="line-195"></span><span class="anchor" id="line-196"></span>

Here we write all the parameters to the file params.yaml<span class="anchor" id="line-197"></span><span class="anchor" id="line-198"></span><span class="anchor" id="line-199"></span>

<pre><span class="anchor" id="line-1-25"></span>$ rosparam dump params.yaml</pre>

<span class="anchor" id="line-200"></span><span class="anchor" id="line-201"></span>

You can even load these yaml files into new namespaces, e.g. <tt class="backtick">copy</tt>:<span class="anchor" id="line-202"></span><span class="anchor" id="line-203"></span><span class="anchor" id="line-204"></span><span class="anchor" id="line-205"></span>

<pre><span class="anchor" id="line-1-26"></span>$ rosparam load params.yaml copy
<span class="anchor" id="line-2-10"></span>$ rosparam get copy/background_b</pre>

<span class="anchor" id="line-206"></span>

*   <span class="anchor" id="line-207"></span><span class="anchor" id="line-208"></span>

    <pre><span class="anchor" id="line-1-27"></span>255</pre>

    <span class="anchor" id="line-209"></span><span class="anchor" id="line-210"></span>

Now that you understand how ROS services and params work, let's [try using rqt_console and roslaunch](/ROS/Tutorials/UsingRqtconsoleRoslaunch)<span class="anchor" id="line-211"></span><span class="anchor" id="line-212"></span><span class="anchor" id="line-213"></span>

<span class="anchor" id="line-214"></span>

<span class="anchor" id="line-215"></span>

<span class="anchor" id="line-216"></span>

<span class="anchor" id="line-217"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/UnderstandingServicesParams (last edited 2014-10-23 13:24:57 by <span title="VictorLamoine @ ARennes-658-1-75-113.w92-139.abo.wanadoo.fr[92.139.82.113]">[VictorLamoine](/VictorLamoine "VictorLamoine @ ARennes-658-1-75-113.w92-139.abo.wanadoo.fr[92.139.82.113]")</span>)
