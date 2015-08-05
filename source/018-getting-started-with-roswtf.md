<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [Getting started with roswtf](/action/fullsearch/ROS/Tutorials/Getting%20started%20with%20roswtf?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FGetting+started+with+roswtf%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

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

## Getting started with roswtf

<span class="anchor" id="line-9-1"></span>**Description:** Basic introduction to the [roswtf](/roswtf) tool.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span>**Keywords:** roswtf  

<span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-16-1"></span><span class="anchor" id="line-17-1"></span>**Next Tutorial:** [Navigating the wiki](/ROS/Tutorials/NavigatingTheWiki)  

<span class="anchor" id="line-18-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<div class="table-of-contents">

Contents

1.  [Checking your installation](#Checking_your_installation)
2.  [Trying it online](#Trying_it_online)
3.  [Errors](#Errors)

</div>

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

**Before you start this tutorial, please make sure your <tt class="backtick">roscore</tt> is NOT running**.<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

### Checking your installation

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

[roswtf](/roswtf) examines your system to try and find problems. Let's try it out:<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

<pre><span class="anchor" id="line-1-2"></span>$ roscd
<span class="anchor" id="line-2-2"></span>$ roswtf</pre>

<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

You should see (detail of the output varies):<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

<pre><span class="anchor" id="line-1-3"></span>Stack: ros
<span class="anchor" id="line-2-3"></span>================================================================================
<span class="anchor" id="line-3-2"></span>Static checks summary:
<span class="anchor" id="line-4-2"></span>
<span class="anchor" id="line-5-2"></span>No errors or warnings
<span class="anchor" id="line-6-2"></span>================================================================================
<span class="anchor" id="line-7-2"></span>
<span class="anchor" id="line-8-2"></span>Cannot communicate with master, ignoring graph checks</pre>

<span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span>

If your installation ran correctly you should output similar to the above. The output is telling you:<span class="anchor" id="line-44"></span>

*   "Stack: ros": [roswtf](/roswtf) uses whatever your current directory is to determine what checks it does. This is telling us that you started <tt class="backtick">roswtf</tt> in the <tt class="backtick">ros</tt> stack.<span class="anchor" id="line-45"></span>

*   "Static checks summary": this is a report on any filesystem issues. It's telling us that there were no errors.<span class="anchor" id="line-46"></span>
*   "Cannot communicate with master, ignoring graph checks": the <tt class="backtick">roscore</tt> isn't running, so <tt class="backtick">roswtf</tt> didn't do any online checks.<span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span>

### Trying it online

<span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

For this next step, we want a [Master](/Master) to be up, so go ahead and start a <tt class="backtick">roscore</tt>.<span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span>

Now, try running the same sequence again:<span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

<pre><span class="anchor" id="line-1-4"></span>$ roscd
<span class="anchor" id="line-2-4"></span>$ roswtf</pre>

<span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span>

You should see:<span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span>

<pre><span class="anchor" id="line-1-5"></span>Stack: ros
<span class="anchor" id="line-2-5"></span>================================================================================
<span class="anchor" id="line-3-3"></span>Static checks summary:
<span class="anchor" id="line-4-3"></span>
<span class="anchor" id="line-5-3"></span>No errors or warnings
<span class="anchor" id="line-6-3"></span>================================================================================
<span class="anchor" id="line-7-3"></span>Beginning tests of your ROS graph. These may take awhile...
<span class="anchor" id="line-8-3"></span>analyzing graph...
<span class="anchor" id="line-9-2"></span>... done analyzing graph
<span class="anchor" id="line-10-2"></span>running graph rules...
<span class="anchor" id="line-11-2"></span>... done running graph rules
<span class="anchor" id="line-12-2"></span>
<span class="anchor" id="line-13-2"></span>Online checks summary:
<span class="anchor" id="line-14-2"></span>
<span class="anchor" id="line-15-2"></span>Found 1 warning(s).
<span class="anchor" id="line-16-2"></span>Warnings are things that may be just fine, but are sometimes at fault
<span class="anchor" id="line-17-2"></span>
<span class="anchor" id="line-18-2"></span>WARNING The following node subscriptions are unconnected:
<span class="anchor" id="line-19-1"></span> * /rosout:
<span class="anchor" id="line-20-1"></span>   * /rosout</pre>

<span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span>

<tt class="backtick">roswtf</tt> did some online examination of your graph now that your <tt class="backtick">roscore</tt> is running. Depending on how many ROS nodes you have running, this can take a long time to complete. As you can see, this time it produced a warning:<span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span><span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span>

<pre><span class="anchor" id="line-1-6"></span>WARNING The following node subscriptions are unconnected:
<span class="anchor" id="line-2-6"></span> * /rosout:
<span class="anchor" id="line-3-4"></span>   * /rosout</pre>

<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

<tt class="backtick">roswtf</tt> is warning you that the [rosout](/rosout) node is subscribed to a topic that no one is publishing to. In this case, this is expected because nothing else is running, so we can ignore it.<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

### Errors

<span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span>

<tt class="backtick">roswtf</tt> will warn you about things that look suspicious but may be normal in your system. It can also report errors for problems that it knows are wrong.<span class="anchor" id="line-92"></span><span class="anchor" id="line-93"></span>

For this part, we are going to set your <tt class="backtick">ROS_PACKAGE_PATH</tt> to a _bad_ value. We're also going to stop our <tt class="backtick">roscore</tt> to simplify the output that you see.<span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span>

<span class="anchor" id="line-96"></span><span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span>

<pre><span class="anchor" id="line-1-7"></span>$ roscd
<span class="anchor" id="line-2-7"></span>$ ROS_PACKAGE_PATH=bad:$ROS_PACKAGE_PATH roswtf</pre>

<span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span>

This time we see:<span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span><span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span>

<pre><span class="anchor" id="line-1-8"></span>Stack: ros
<span class="anchor" id="line-2-8"></span>================================================================================
<span class="anchor" id="line-3-5"></span>Static checks summary:
<span class="anchor" id="line-4-4"></span>
<span class="anchor" id="line-5-4"></span>Found 1 error(s).
<span class="anchor" id="line-6-4"></span>
<span class="anchor" id="line-7-4"></span>ERROR Not all paths in ROS_PACKAGE_PATH [bad] point to an existing directory: 
<span class="anchor" id="line-8-4"></span> * bad
<span class="anchor" id="line-9-3"></span>
<span class="anchor" id="line-10-3"></span>================================================================================
<span class="anchor" id="line-11-3"></span>
<span class="anchor" id="line-12-3"></span>Cannot communicate with master, ignoring graph checks</pre>

<span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span>

As you can see, <tt class="backtick">roswtf</tt> now gives us an error about the <tt class="backtick">ROS_PACKAGE_PATH</tt> setting.<span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span>

There are many other types of problems that <tt class="backtick">roswtf</tt> can find. If you find yourself stumped by a build or communication issue, try running it and seeing if it can point you in the right direction.<span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span>

Now that you know how to use roswtf, take sometime to learn more about how ros.org is structured and [navigating the wiki](/ROS/Tutorials/NavigatingTheWiki).<span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span>

<span class="anchor" id="line-122"></span>

<span class="anchor" id="line-123"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/Getting started with roswtf (last edited 2014-01-11 08:50:58 by <span title="flluo @ 58.211.96.227[58.211.96.227]">[flluo](/flluo "flluo @ 58.211.96.227[58.211.96.227]")</span>)
