---
id: 401
toc: content
---

# MySQL
&emsp;详情:<https://baike.baidu.com/item/MySQL/471251?fr=ge_ala>  

&emsp;MySQL是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，属于 Oracle 旗下产品。MySQL是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的RDBMS (Relational Database Management System，关系数据库管理系统)应用软件之一。  

&emsp;MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。  

&emsp;MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型和大型网站的开发都选择 MySQL作为网站数据库。

## 应用环境
&emsp;与其他的大型数据库例如 Oracle、DB2、SQL Server等相比，MySQL [1] 自有它的不足之处，但是这丝毫也没有减少它受欢迎的程度。对于一般的个人使用者和中小型企业来说，MySQL提供的功能已经绰绰有余，而且由于 MySQL是开放源码软件，因此可以大大降低总体拥有成本。

## 系统特性
1. MySQL使用 C和 C++编写，并使用了多种编译器进行测试，保证了源代码的可移植性。
2. 支持 AIX、FreeBSD、HP-UX、Linux、Mac OS、NovellNetware、OpenBSD、OS/2 Wrap、Solaris、Windows等多种操作系统。
3. 为多种编程语言提供了 API。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby,.NET和 Tcl 等。
4. 支持多线程，充分利用 CPU 资源。
5. 优化的 SQL查询算法，有效地提高查询速度。
6. 既能够作为一个单独的应用程序应用在客户端服务器网络环境中，也能够作为一个库而嵌入到其他的软件中。
7. 提供多语言支持，常见的编码如中文的 GB 2312、BIG5，日文的 Shift_JIS等都可以用作数据表名和数据列名。
8. 提供 TCP/IP、ODBC 和 JDBC等多种数据库连接途径。
9. 提供用于管理、检查、优化数据库操作的管理工具。
10. 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。

## 存储引擎
&emsp;MyISAMMySQL 5.0 之前的默认数据库引擎，最为常用。拥有较高的插入，查询速度，但不支持事务  

&emsp;InnoDB事务型数据库的首选引擎，支持ACID事务，支持行级锁定, MySQL 5.5 起成为默认数据库引擎  

&emsp;BDB源 自 Berkeley DB，事务型数据库的另一种选择，支持Commit 和Rollback 等其他事务特性  

&emsp;Memory所有数据置于内存的存储引擎，拥有极高的插入，更新和查询效率。但是会占用和数据量成正比的内存空间。并且其内容会在 MySQL 重新启动时丢失  

&emsp;Merge将一定数量的 MyISAM 表联合而成一个整体，在超大规模数据存储时很有用
