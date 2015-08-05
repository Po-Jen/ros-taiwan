<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [UsingRosEd](/action/fullsearch/ROS/Tutorials/UsingRosEd?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUsingRosEd%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [Using rqt_console and roslaunch](/ROS/Tutorials/UsingRqtconsoleRoslaunch).</td>

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

## Using rosed to edit files in ROS

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial shows how to use [rosed](/rosbash) to make editing easier.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Creating a Msg and Srv](/ROS/Tutorials/CreatingMsgAndSrv)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<div class="table-of-contents">

Contents

1.  [Using rosed](#Using_rosed)
2.  [Using rosed with tab completion](#Using_rosed_with_tab_completion)
3.  [Editor](#Editor)

</div>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span>

### Using rosed

<span class="anchor" id="line-30"></span>

<tt class="backtick">rosed</tt> is part of the [rosbash](/rosbash) suite. It allows you to directly edit a file within a package by using the package name rather than having to type the entire path to the package.<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

Usage:<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span>

<span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

<pre><span class="anchor" id="line-1-2"></span>$ rosed [package_name] [filename]</pre>

<span class="anchor" id="line-37"></span>

Example:<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

<span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

<pre><span class="anchor" id="line-1-3"></span>$ rosed roscpp Logger.msg</pre>

<span class="anchor" id="line-42"></span>

This example demonstrates how you would edit the Logger.msg file within the roscpp package.<span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span>

If this example doesn't work is probably because you don't have the <tt class="backtick">vim</tt> editor installed. Please refer to [Editor](/ROS/Tutorials/UsingRosEd#Editor) section. If you don't know how to get out of vim, [click here](http://kb.iu.edu/data/afcz.html).<span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span>

If the filename is not uniquely defined within the package, a menu will prompt you to choose which of the possible files you want to edit.<span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span>

### Using rosed with tab completion

<span class="anchor" id="line-50"></span>

This way you can easily see and optionally edit all files from a package without knowing its exact name.<span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span>

Usage:<span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span>

<span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span>

<pre><span class="anchor" id="line-1-4"></span>$ rosed [package_name] <tab><tab></pre>

<span class="anchor" id="line-57"></span>

Example:<span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span>

<pre><span class="anchor" id="line-1-5"></span>$ rosed roscpp <tab><tab></pre>

<span class="anchor" id="line-61"></span>

*   <span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span>

    <pre><span class="anchor" id="line-1-6"></span>Empty.srv                   package.xml
    <span class="anchor" id="line-2-2"></span>GetLoggers.srv              roscpp-msg-extras.cmake
    <span class="anchor" id="line-3-2"></span>Logger.msg                  roscpp-msg-paths.cmake
    <span class="anchor" id="line-4-2"></span>SetLoggerLevel.srv          roscpp.cmake
    <span class="anchor" id="line-5-2"></span>genmsg_cpp.py               roscppConfig-version.cmake
    <span class="anchor" id="line-6-2"></span>gensrv_cpp.py               roscppConfig.cmake
    <span class="anchor" id="line-7-2"></span>msg_gen.py                  </pre>

    <span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span>

### Editor

<span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span>

The default editor for rosed is <tt class="backtick">vim</tt>. The more beginner-friendly editor <tt class="backtick">nano</tt> is included with the default Ubuntu install. You can use it by editing your ~/.bashrc file to include:<span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span>

<pre><span class="anchor" id="line-1-7"></span>export EDITOR='nano -w'</pre>

<span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span>

To set the default editor to <tt class="backtick">emacs</tt> you can edit your ~/.bashrc file to include:<span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span>

<pre><span class="anchor" id="line-1-8"></span>export EDITOR='emacs -nw'</pre>

<span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span>

_**NOTE:**_ _changes in .bashrc will only take effect for new terminals. Terminals that are already open will not see the new environmental variable._<span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span>

Open a new terminal and see if <tt>EDITOR</tt> is defined:<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

<pre><span class="anchor" id="line-1-9"></span>$ echo $EDITOR</pre>

<span class="anchor" id="line-90"></span>

*   <span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

    <pre><span class="anchor" id="line-1-10"></span>nano -w</pre>

    <span class="anchor" id="line-93"></span>or<span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span>

    <pre><span class="anchor" id="line-1-11"></span>emacs -nw</pre>

    <span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span>

Now that you have successfully configured and used rosed, let's [create a Msg and Srv](/ROS/Tutorials/CreatingMsgAndSrv).<span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span>

<span class="anchor" id="line-102"></span>

<span class="anchor" id="line-103"></span>

<span class="anchor" id="line-104"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/UsingRosEd (last edited 2014-03-10 00:53:37 by <span title="CoryCross @ localhost[127.0.0.1]">[CoryCross](/CoryCross "CoryCross @ localhost[127.0.0.1]")</span>)
