SELECT * FROM users;
SELECT * FROM courses;
SELECT * FROM supporttickets;
SELECT * FROM coursesavailabilities;

INSERT into lessons VALUES (1,'урок 1.1', 'описание урока 1.1', 1);

SELECT COUNT(*) FROM lessons
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 1;

INSERT INTO courseavailabilities VALUES (4, 'yes');

INSERT into lessons VALUES (1,'урок 1.1', 'описание урока 1.1', 1)	
INSERT INTO coursesavailabilities VALUES (4, 'yes')	
SELECT * FROM coursesavailabilities

DELETE FROM coursesavailabilities WHERE courseRef = 4 AND user = 'yes'	
INSERT INTO coursesavailabilities VALUES (4, 'yes')	
DELETE FROM coursesavailabilities WHERE courseRef = 4 AND user = 'yes'	

SELECT COUNT(*) FROM lessons
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 1;
 
INSERT into lessons VALUES (1,'урок 1.1', 'описание урока 1.1', 1)	

SELECT COUNT(*) FROM lessons
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2;

SELECT COUNT(*) FROM lessons
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2;



INSERT into answers VALUES (1, 1, 'yes')
INSERT into answers VALUES (1, 2, 'yes')
INSERT into answers VALUES (1, 3, 'yes')
INSERT into answers VALUES (1, 4, 'yes')
INSERT into answers VALUES (2, 5, 'yes')

INSERT INTO courses VALUES (1, 'Базовый. Администрирование баз данных', 'https://lorchinstitute.ru/wp-content/uploads/0c994adc_0219_40e3_a632_e4b760aeed6c.jpg', 'Описание к курсу баз данных. В общем случае - произвольный html.')	1 row(s) affected	0.125 sec
INSERT INTO courses VALUES (2, 'Базовый. Разработка кроссплатформенных мобильных приложений', 'https://i.ytimg.com/vi/Fbld7ZkV1zo/maxresdefault.jpg', 'Описание к курсу кроссплатформенных мобильных приложений. В общем случае - произвольный html.')	1 row(s) affected	0.094 sec
INSERT INTO courses VALUES (3, 'Базовый. Продвижение в тиктоке', 'https://www.ridus.ru/images/2020/7/29/1127582/in_article_1fc3876713.png', 'Описание к курсу про тикток. В общем случае - произвольный html.')	1 row(s) affected	0.094 sec
INSERT INTO courses VALUES (4,'Продвижение в одноклассниках','https://itcrumbs.ru/wp-content/uploads/2019/09/razmytie2.jpg','Описание к курсу про одноклассники. В общем случае - произвольный html.')	1 row(s) affected	0.094 sec
INSERT INTO courses VALUES (5,'Продвижение в очереди в поликлинике','https://dcsfxzu8xls6u.cloudfront.net/photos/z_2022_01/-8v45s.jpg','Описание к курсу про поликлинику. В общем случае - произвольный html.')	1 row(s) affected	0.062 sec
INSERT into lessons VALUES (1,'урок 1.1', 'описание урока 1.1', 1)
INSERT into lessons VALUES (2,'урок 1.2', 'описание урока 1.2', 1)
INSERT into lessons VALUES (3,'урок 1.3', 'описание урока 1.3', 1)
INSERT into lessons VALUES (4,'урок 1.4', 'описание урока 1.4', 1)
INSERT into lessons VALUES (5,'урок 2.1', 'описание урока 2.1', 2)
INSERT into lessons VALUES (6,'урок 2.2', 'описание урока 2.2', 2)
INSERT into lessons VALUES (7,'урок 2.3', 'описание урока 2.3', 2)
INSERT into lessons VALUES (8,'урок 3.1', 'описание урока 3.1', 3)
INSERT into lessons VALUES (9,'урок 3.2', 'описание урока 3.1', 3)
INSERT into lessons VALUES (10,'урок 3.2', 'описание урока 3.1', 3)
INSERT into lessons VALUES (11,'урок 4.1', 'описание урока 4.1', 4)	
INSERT into lessons VALUES (12,'урок 4.2', 'описание урока 4.2', 4)
INSERT into lessons VALUES (13,'урок 5.1', 'описание урока 5.1', 5)
INSERT into answers VALUES (1, 1, 'yes')
INSERT into answers VALUES (1, 2, 'yes')
INSERT into answers VALUES (1, 3, 'yes')
INSERT into answers VALUES (1, 4, 'yes')
INSERT into answers VALUES (2, 5, 'yes')
INSERT into answers VALUES (2, 6, 'yes')

INSERT into coursesavailabilities VALUES (1, 'yes')
INSERT into coursesavailabilities VALUES (2, 'yes')
INSERT into coursesavailabilities VALUES (3, 'yes')


SELECT COUNT(*) AS count FROM lessons 
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2

SELECT * FROM lessons 
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2

SELECT * FROM answers 
WHERE courseRef = 1 AND user = 'yes'

SELECT COUNT(*) AS count FROM answers 
WHERE courseRef = 1 AND user = 'yes'

SELECT COUNT(*) AS count FROM lessons 
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2


SELECT * FROM lessons 
INNER JOIN courses ON courseRef = courseId
WHERE courseRef = 2

SELECT COUNT(*) AS count FROM lessons WHERE courseRef = 1
SELECT COUNT(*) AS count FROM answers WHERE courseRef = 2
