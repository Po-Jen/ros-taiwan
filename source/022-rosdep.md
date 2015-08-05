<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [rosdep](/action/fullsearch/ROS/Tutorials/rosdep?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2Frosdep%22 "Click to do a full-text search for this title")

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

## Managing System dependencies

<span class="anchor" id="line-9-1"></span>**Description:** This explains how to use [rosdep](/rosdep) to install system dependencies.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span>**Tutorial Level:** INTERMEDIATE   

<span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Next Tutorial:** [Roslaunch tips for large projects](/ROS/Tutorials/Roslaunch%20tips%20for%20larger%20projects)  

<span class="anchor" id="line-16-1"></span>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<div class="table-of-contents">

Contents

1.  [System Dependencies](#System_Dependencies)
    1.  [rosdep](#rosdep)

</div>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<span id="rosversion_selector" class="btn-group"><button id="electric" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'electric_and_older', 'fuerte_and_older', 'groovy_and_older', 'hydro_and_older', 'indigo_and_older', 'jade_and_older', 'electric'], hide:['electric_and_newer', 'fuerte_and_newer', 'groovy_and_newer', 'hydro_and_newer', 'indigo_and_newer', 'jade_and_newer', 'electric_and_older', 'fuerte', 'groovy', 'hydro', 'indigo', 'jade'], target_ros_distro:'electric'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('fuerte').style.background='#e6e6e6';document.getElementById('fuerte').style.color='#3e4f6e';document.getElementById('groovy').style.background='#e6e6e6';document.getElementById('groovy').style.color='#3e4f6e';document.getElementById('hydro').style.background='#e6e6e6';document.getElementById('hydro').style.color='#3e4f6e';document.getElementById('indigo').style.background='#e6e6e6';document.getElementById('indigo').style.color='#3e4f6e';document.getElementById('jade').style.background='#e6e6e6';document.getElementById('jade').style.color='#3e4f6e';return false">electric</button> <button id="fuerte" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'fuerte_and_newer', 'fuerte_and_older', 'groovy_and_older', 'hydro_and_older', 'indigo_and_older', 'jade_and_older', 'fuerte'], hide:['fuerte_and_newer', 'groovy_and_newer', 'hydro_and_newer', 'indigo_and_newer', 'jade_and_newer', 'electric_and_older', 'fuerte_and_older', 'electric', 'groovy', 'hydro', 'indigo', 'jade'], target_ros_distro:'fuerte'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('electric').style.background='#e6e6e6';document.getElementById('electric').style.color='#3e4f6e';document.getElementById('groovy').style.background='#e6e6e6';document.getElementById('groovy').style.color='#3e4f6e';document.getElementById('hydro').style.background='#e6e6e6';document.getElementById('hydro').style.color='#3e4f6e';document.getElementById('indigo').style.background='#e6e6e6';document.getElementById('indigo').style.color='#3e4f6e';document.getElementById('jade').style.background='#e6e6e6';document.getElementById('jade').style.color='#3e4f6e';return false">fuerte</button> <button id="groovy" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'fuerte_and_newer', 'groovy_and_newer', 'groovy_and_older', 'hydro_and_older', 'indigo_and_older', 'jade_and_older', 'groovy'], hide:['groovy_and_newer', 'hydro_and_newer', 'indigo_and_newer', 'jade_and_newer', 'electric_and_older', 'fuerte_and_older', 'groovy_and_older', 'electric', 'fuerte', 'hydro', 'indigo', 'jade'], target_ros_distro:'groovy'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('electric').style.background='#e6e6e6';document.getElementById('electric').style.color='#3e4f6e';document.getElementById('fuerte').style.background='#e6e6e6';document.getElementById('fuerte').style.color='#3e4f6e';document.getElementById('hydro').style.background='#e6e6e6';document.getElementById('hydro').style.color='#3e4f6e';document.getElementById('indigo').style.background='#e6e6e6';document.getElementById('indigo').style.color='#3e4f6e';document.getElementById('jade').style.background='#e6e6e6';document.getElementById('jade').style.color='#3e4f6e';return false">groovy</button> <button id="hydro" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'fuerte_and_newer', 'groovy_and_newer', 'hydro_and_newer', 'hydro_and_older', 'indigo_and_older', 'jade_and_older', 'hydro'], hide:['hydro_and_newer', 'indigo_and_newer', 'jade_and_newer', 'electric_and_older', 'fuerte_and_older', 'groovy_and_older', 'hydro_and_older', 'electric', 'fuerte', 'groovy', 'indigo', 'jade'], target_ros_distro:'hydro'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('electric').style.background='#e6e6e6';document.getElementById('electric').style.color='#3e4f6e';document.getElementById('fuerte').style.background='#e6e6e6';document.getElementById('fuerte').style.color='#3e4f6e';document.getElementById('groovy').style.background='#e6e6e6';document.getElementById('groovy').style.color='#3e4f6e';document.getElementById('indigo').style.background='#e6e6e6';document.getElementById('indigo').style.color='#3e4f6e';document.getElementById('jade').style.background='#e6e6e6';document.getElementById('jade').style.color='#3e4f6e';return false">hydro</button> <button id="indigo" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'fuerte_and_newer', 'groovy_and_newer', 'hydro_and_newer', 'indigo_and_newer', 'indigo_and_older', 'jade_and_older', 'indigo'], hide:['indigo_and_newer', 'jade_and_newer', 'electric_and_older', 'fuerte_and_older', 'groovy_and_older', 'hydro_and_older', 'indigo_and_older', 'electric', 'fuerte', 'groovy', 'hydro', 'jade'], target_ros_distro:'indigo'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('electric').style.background='#e6e6e6';document.getElementById('electric').style.color='#3e4f6e';document.getElementById('fuerte').style.background='#e6e6e6';document.getElementById('fuerte').style.color='#3e4f6e';document.getElementById('groovy').style.background='#e6e6e6';document.getElementById('groovy').style.color='#3e4f6e';document.getElementById('hydro').style.background='#e6e6e6';document.getElementById('hydro').style.color='#3e4f6e';document.getElementById('jade').style.background='#e6e6e6';document.getElementById('jade').style.color='#3e4f6e';return false">indigo</button> <button id="jade" class="btn btn-default" onclick="Version({show:['electric_and_newer', 'fuerte_and_newer', 'groovy_and_newer', 'hydro_and_newer', 'indigo_and_newer', 'jade_and_newer', 'jade_and_older', 'jade'], hide:['jade_and_newer', 'electric_and_older', 'fuerte_and_older', 'groovy_and_older', 'hydro_and_older', 'indigo_and_older', 'jade_and_older', 'electric', 'fuerte', 'groovy', 'hydro', 'indigo'], target_ros_distro:'jade'});this.style.color='#e6e6e6';this.style.background='#3e4f6e';document.getElementById('electric').style.background='#e6e6e6';document.getElementById('electric').style.color='#3e4f6e';document.getElementById('fuerte').style.background='#e6e6e6';document.getElementById('fuerte').style.color='#3e4f6e';document.getElementById('groovy').style.background='#e6e6e6';document.getElementById('groovy').style.color='#3e4f6e';document.getElementById('hydro').style.background='#e6e6e6';document.getElementById('hydro').style.color='#3e4f6e';document.getElementById('indigo').style.background='#e6e6e6';document.getElementById('indigo').style.color='#3e4f6e';return false">jade</button></span><span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

### System Dependencies

<span class="anchor" id="line-31"></span>

ROS packages sometimes require external libraries and tools that must be provided by the operating system. These required libraries and tools are commonly referred to as _system dependencies_. In some cases these _system dependencies_ are not installed by default. ROS provides a simple tool, <tt class="backtick">rosdep</tt>, that is used to download and install _system dependencies_.<span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

ROS packages must declare that they need these _system dependencies_ in the package manifest. Let's look at the manifest for the turtlesim package:<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

<pre><span class="anchor" id="line-1-2"></span>$ roscd turtlesim</pre>

<span class="anchor" id="line-37"></span>

Then,<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span>

<span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span><span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span><span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span><span class="anchor" id="line-62"></span>

<div class="version groovy_and_newer"><span class="anchor" id="line-1-3"></span>

<span class="anchor" id="line-2-2"></span><span class="anchor" id="line-3-2"></span>

<pre><span class="anchor" id="line-1-4"></span>$ cat package.xml</pre>

<span class="anchor" id="line-4-2"></span><span class="anchor" id="line-5-2"></span>

*   <span class="anchor" id="line-6-2"></span><span class="anchor" id="line-7-2"></span><span class="anchor" id="line-8-2"></span><span class="anchor" id="line-9-2"></span><span class="anchor" id="line-10-2"></span><span class="anchor" id="line-11-2"></span><span class="anchor" id="line-12-2"></span><span class="anchor" id="line-13-2"></span><span class="anchor" id="line-14-2"></span><span class="anchor" id="line-15-2"></span><span class="anchor" id="line-16-2"></span><span class="anchor" id="line-17-1"></span><span class="anchor" id="line-18-1"></span><span class="anchor" id="line-19-1"></span><span class="anchor" id="line-20-1"></span><span class="anchor" id="line-21-1"></span>

    <pre><span class="anchor" id="line-1-5"></span><package>
    <span class="anchor" id="line-2-3"></span>
    <span class="anchor" id="line-3-3"></span>...
    <span class="anchor" id="line-4-3"></span>...
    <span class="anchor" id="line-5-3"></span>  <build_depend>message_generation</build_depend>
    <span class="anchor" id="line-6-3"></span>  <build_depend>libqt4-dev</build_depend>
    <span class="anchor" id="line-7-3"></span>  <build_depend>qt4-qmake</build_depend>
    <span class="anchor" id="line-8-3"></span>  <build_depend>rosconsole</build_depend>
    <span class="anchor" id="line-9-3"></span>  <build_depend>roscpp</build_depend>
    <span class="anchor" id="line-10-3"></span>  <build_depend>roscpp_serialization</build_depend>
    <span class="anchor" id="line-11-3"></span>  <build_depend>roslib</build_depend>
    <span class="anchor" id="line-12-3"></span>  <build_depend>rostime</build_depend>
    <span class="anchor" id="line-13-3"></span>  <build_depend>std_msgs</build_depend>
    <span class="anchor" id="line-14-3"></span>  <build_depend>std_srvs</build_depend>
    <span class="anchor" id="line-15-3"></span></package></pre>

    <span class="anchor" id="line-22-1"></span>

As you can see [turtlesim](/turtlesim) needs those libraries and packages.

</div>

<span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span>

<span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span><span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span><span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span><span class="anchor" id="line-80"></span>

<div class="version fuerte_and_older"><span class="anchor" id="line-1-6"></span>

<span class="anchor" id="line-2-4"></span><span class="anchor" id="line-3-4"></span>

<pre><span class="anchor" id="line-1-7"></span>$ cat manifest.xml</pre>

<span class="anchor" id="line-4-4"></span><span class="anchor" id="line-5-4"></span>

*   <span class="anchor" id="line-6-4"></span><span class="anchor" id="line-7-4"></span><span class="anchor" id="line-8-4"></span><span class="anchor" id="line-9-4"></span><span class="anchor" id="line-10-4"></span><span class="anchor" id="line-11-4"></span><span class="anchor" id="line-12-4"></span><span class="anchor" id="line-13-4"></span><span class="anchor" id="line-14-4"></span>

    <pre><span class="anchor" id="line-1-8"></span><package>
    <span class="anchor" id="line-2-5"></span>
    <span class="anchor" id="line-3-5"></span>...
    <span class="anchor" id="line-4-5"></span>...
    <span class="anchor" id="line-5-5"></span>    <rosdep name="libqt4-dev"/>
    <span class="anchor" id="line-6-5"></span>    <rosdep name="qt4-qmake"/>
    <span class="anchor" id="line-7-5"></span>
    <span class="anchor" id="line-8-5"></span></package></pre>

    <span class="anchor" id="line-15-4"></span>

As you can see [turtlesim](/turtlesim) needs <tt>libqt4-dev</tt> and <tt>qt4-qmake</tt>.

</div>

<span class="anchor" id="line-81"></span><span class="anchor" id="line-82"></span>

#### rosdep

<span class="anchor" id="line-83"></span>

<tt class="backtick">rosdep</tt> is a tool you can use to install system dependencies required by ROS packages.<span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span>

Usage:<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span><span class="anchor" id="line-88"></span>

<pre><span class="anchor" id="line-1-9"></span>rosdep install [package]</pre>

<span class="anchor" id="line-89"></span><span class="anchor" id="line-90"></span>

Download and install the system dependencies for turtlesim:<span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

<span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span>

<pre><span class="anchor" id="line-1-10"></span>$ rosdep install turtlesim</pre>

<span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span>

If you've been following along with the tutorials, it's likely that this is the first time you've used <tt class="backtick">rosdep</tt>. When you run this command, you'll get an error message:<span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span>

*   <span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span>

    <pre><span class="anchor" id="line-1-11"></span>ERROR: your rosdep installation has not been initialized yet.  Please run:
    <span class="anchor" id="line-2-6"></span>        
    <span class="anchor" id="line-3-6"></span>    sudo rosdep init
    <span class="anchor" id="line-4-6"></span>    rosdep update</pre>

    <span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span>

Just run those two commands and then try to install turtlesim's dependencies again.<span class="anchor" id="line-107"></span><span class="anchor" id="line-108"></span>

If you installed using binaries you will see:<span class="anchor" id="line-109"></span>

*   <span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span>

    <pre><span class="anchor" id="line-1-12"></span>All required rosdeps installed successfully</pre>

    <span class="anchor" id="line-112"></span>

Otherwise you will see the output of installing the dependencies of turtlesim:<span class="anchor" id="line-113"></span>

*   <span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span><span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span><span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span><span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span><span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span><span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span>

    <pre><span class="anchor" id="line-1-13"></span>set -o errexit
    <span class="anchor" id="line-2-7"></span>set -o verbose
    <span class="anchor" id="line-3-7"></span>
    <span class="anchor" id="line-4-7"></span>
    <span class="anchor" id="line-5-6"></span>if [ ! -f /opt/ros/lib/libboost_date_time-gcc42-mt*-1_37.a ] ; then
    <span class="anchor" id="line-6-6"></span>  mkdir -p ~/ros/ros-deps
    <span class="anchor" id="line-7-6"></span>  cd ~/ros/ros-deps
    <span class="anchor" id="line-8-6"></span>  wget --tries=10 http://pr.willowgarage.com/downloads/boost_1_37_0.tar.gz
    <span class="anchor" id="line-9-5"></span>  tar xzf boost_1_37_0.tar.gz
    <span class="anchor" id="line-10-5"></span>  cd boost_1_37_0
    <span class="anchor" id="line-11-5"></span>  ./configure --prefix=/opt/ros
    <span class="anchor" id="line-12-5"></span>  make
    <span class="anchor" id="line-13-5"></span>  sudo make install
    <span class="anchor" id="line-14-5"></span>fi
    <span class="anchor" id="line-15-5"></span>
    <span class="anchor" id="line-16-3"></span>
    <span class="anchor" id="line-17-2"></span>if [ ! -f /opt/ros/lib/liblog4cxx.so.10 ] ; then
    <span class="anchor" id="line-18-2"></span>  mkdir -p ~/ros/ros-deps
    <span class="anchor" id="line-19-2"></span>  cd ~/ros/ros-deps
    <span class="anchor" id="line-20-2"></span>  wget --tries=10 http://pr.willowgarage.com/downloads/apache-log4cxx-0.10.0-wg_patched.tar.gz
    <span class="anchor" id="line-21-2"></span>  tar xzf apache-log4cxx-0.10.0-wg_patched.tar.gz
    <span class="anchor" id="line-22-2"></span>  cd apache-log4cxx-0.10.0
    <span class="anchor" id="line-23-1"></span>  ./configure --prefix=/opt/ros
    <span class="anchor" id="line-24-1"></span>  make
    <span class="anchor" id="line-25-1"></span>  sudo make install
    <span class="anchor" id="line-26-1"></span>fi</pre>

    <span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span>

<tt class="backtick">rosdep</tt> runs the bash script above and exits when complete.<span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span>

<span class="anchor" id="line-148"></span>

<span class="anchor" id="line-149"></span>

<span class="anchor" id="line-150"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/rosdep (last edited 2015-05-07 00:22:38 by <span title="William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]">[WilliamWoodall](/WilliamWoodall "William J. Woodall @ 70-35-50-58.static.wiline.com[70.35.50.58]")</span>)
