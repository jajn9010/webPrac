<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과창</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		String name = request.getParameter("irum");
		String pwd = request.getParameter("pwd");
		String mail = request.getParameter("mail");
		
		out.print(name + "님 반갑습니다. <br>비번은 : " + pwd + "<br> e-mail : " + mail);
	%>
</body>
</html>