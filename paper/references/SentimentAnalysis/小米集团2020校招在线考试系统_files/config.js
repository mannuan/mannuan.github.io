var ACMGlobalData = {
    versionInfo: [{
                lang: 0,
                code: "C",
                version: "gcc  4.8.4",
                info: "<li>请使用标准输入输出(stdin，stdout) ；请把所有程序写在一个文件里</li><li>勿使用图形、文件、网络、系统相关的操作，如sys/stat.h , unistd.h , curl/curl.h , process.h</li><li>编译命令：gcc Main.c -o Main -O2 -fno-asm -Wall -lm -static</li>"
            }, {
                lang: 1,
                code: "C++",
                version: "g++  4.8.4",
                info: "<li>请使用标准输入输出(stdin，stdout) ；请把所有程序写在一个文件里</li><li>勿使用图形、文件、网络、系统相关的操作，如sys/stat.h , unistd.h , curl/curl.h , process.h</li><li>编译命令：g++ Main.cc -o Main -O2 -fno-asm -Wall -lm -static</li>"
            }, {
                lang: 3,
                code: "Java 8",
                version: "Java 1.8.0_66",
                info: "<li>请使用标准输入输出(System.in, System.out)；</li><li>勿使用图形、文件、网络、系统相关的操作，如java.lang.Process , javax.swing.JFrame , Runtime.getRuntime</li><li>不要自定义包名称，否则会报错，即不要添加package answer之类的语句；</li><li>您可以写很多个类，但是必须有一个类名为Main，并且为public属性，并且Main为唯一的public class</li><li>Main类的里面必须包含一个名字为'main'的静态方法（函数），这个方法是程序的入口</li>"
            }, {
                lang: 4,
                code: "Ruby",
                version: "Ruby 1.9.3p484",
                info: ""
            }, {
                lang: 5,
                code: "Bash",
                version: "GNU bash , version 4.3.11(1)-release",
                info: ""
            }, {
                lang: 6,
                code: "Python 2.7",
                version: "Python 2.7.6",
                info: "<li>请使用标准输出(sys.stdout)；勿使用图形、文件、网络、系统相关的操作，如Process , httplib , os</li><li>缩进可以使用tab、4个空格或2个空格，但是只能任选其中一种，不能多种混用</li><li>如果使用sys.stdin.readline，因为默认会带换行符，所以要strip('\\n')进行截取；建议使用raw_input()</li>"
            }, {
                lang: 7,
                code: "PHP",
                version: "PHP 5.5.9-1",
                info: "<li>请使用标准输出(echo/print/print_r)</li><li>勿使用图形、文件、网络、系统相关的操作，如Fileinfo , Filesystem , POSIX</li>"
            }, {
                lang: 9,
                code: "C#",
                version: "Mono C# compiler version 3.2.8.0",
                info: "<li>请使用标准输出(System.Console)</li><li>勿使用图形、文件、网络、系统相关的操作，如System.Drawing , System.IO , System.ServiceProcess , System.Threading , System.Windows</li>"
            }, {
                lang: 10,
                code: "Obj-C",
                version: "基于GNUstep",
                info: "<li>NSArray、NSMutableArray等数组不支持中括号下标操作，需要使用addObject、objectAtIndex、replaceObjectAtIndex等进行操作</li>"
            }, {
                lang: 13,
                code: "Clang",
                version: "clang 7.0.1 gcc 4.8.4",
                info: "<li>请使用标准输入输出(stdin，stdout) ；请把所有程序写在一个文件里</li><li>勿使用图形、文件、网络、系统相关的操作，如sys/stat.h , unistd.h , curl/curl.h , process.h</li><li>编译命令：clang Main.c -o Main -fno-asm -Wall -lm -static -std=c99</li>"
            }, {
                lang: 14,
                code: "Clang++",
                version: "clang 7.0.1 gcc 4.8.4",
                info: "<li>请使用标准输入输出(stdin，stdout) ；请把所有程序写在一个文件里</li><li>勿使用图形、文件、网络、系统相关的操作，如sys/stat.h , unistd.h , curl/curl.h , process.h</li><li>编译命令：clang++ Main.cc -o Main -I/usr/include/c++/4.8 -I/usr/include/x86_64-linux-gnu/c++/4.8 -fno-asm -Wall -lm -static -std=c++11</li>"
            }, {
                lang: 15,
                code: "Lua",
                version: "Lua 5.3.2",
                info: ""
            }, {
                lang: 16,
                code: "Swift",
                version: "Swift version 4.2.3",
                info: "<li>读取一行请使用readLine()</li>"
            }, {
                lang: 17,
                code: "Go",
                version: "go1.2.1 linux/amd64",
                info: ""
            }, {
                lang: 18,
                code: "JavaScript(V8)",
                version: "Google V8 Engine",
                info: "<li>作答时不要进行DOM相关操作。</li><li>读写API：gets(size)、readInt()、readDouble()、printsth(sth...)、print(sth...)、read_line()，具体参考第7条：<a target='_blank' href='http://oj.acmcoder.com/ExamNotice.html'>http://oj.acmcoder.com/ExamNotice.html</a></li>"
            }, {
                lang: 19,
                code: "nodejs",
                version: "v6.9.1",
                info: "<li>Nodejs（v6.9.1）输入输出请使用node-stdio模块；</li><li>您也可以使用process.stdin、process.stdout或readline。 </li>"
            }, {
                lang: 21,
                code: "Sql",
                version: "SQLite 3.21.0",
                info: "<li>服务器采用的是SQLite3，不是MySQL、SQLServer或者Oracle；</li><li>SQLite3支持标准的SQL语法，具体见：<a href='https://www.sqlite.org/lang.html' style='color:#fff' target='_blank'>https://www.sqlite.org/lang.html</a>；</li><li>SQLite3内置支持的列处理函数与其他数据库不同，具体见：<a  style='color:#fff' href='https://www.sqlite.org/lang_corefunc.html' target='_blank'>https://www.sqlite.org/lang_corefunc.html。</a></li>"

            }, {
                lang: 22,
                code: "R",
                version: "R3.4.1",
                info: ""
            }, {
                lang: 23,
                code: "Hadoop",
                version: "Hadoop 2.9.0",
                info: ""
            }, {
                lang: 32,
                code: "Python 3",
                version: "Python 3.4.3",
                info: "<li>请使用标准输出(sys.stdout)；勿使用图形、文件、网络、系统相关的操作，如Process , httplib , os </li><li>缩进可以使用tab、4个空格或2个空格，但是只能任选其中一种，不能多种混用</li><li>如果使用sys.stdin.readline，因为默认会带换行符，所以要strip('\n')进行截取；建议使用input()</li>"
            }]
};
