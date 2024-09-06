<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.userTest.model.UserInfoVo" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<% UserInfoVo userinfo=(UserInfoVo)session.getAttribute("userInfo");%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

	<!DOCTYPE html>
	<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>用户信息</title>
		<style>
			body {
				margin: 0;
				padding: 0;
				font-family: Arial, sans-serif;
				position: relative;
				min-height: 100vh;
			}
			.time-display {
				position: absolute;
				top: 0;
				left: 0;
				padding: 10px;
				background-color: #f0f0f0;
				border: 1px solid #ddd;
				border-radius: 5px;
				box-shadow: 0 0 10px rgba(0,0,0,0.1);
			}
			.user-info {
				position: absolute;
				top: 0;
				right: 0;
				padding: 5px 10px;
				background-color: #f8f9fa;
				border: 1px solid #ddd;
				border-radius: 5px;
				box-shadow: 0 0 10px rgba(0,0,0,0.1);
				font-size: 14px; /* 调整字体大小 */
				max-width: 200px; /* 限制最大宽度 */
			}
			.user-info h1 {
				font-size: 16px; /* 调整标题字体大小 */
			}
			.user-info p {
				margin: 5px 0;
			}
		</style>
	</head>
<body>

<div class="user-info">
	<h1>欢迎, ${userInfo.userName}!</h1>
	<p>用户名: ${userInfo.userName}</p>
	<p>电话: ${userInfo.phone}</p>
	<p>地址: ${userInfo.address}</p>
</div>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>形势概览${userinfo.userName}</title>
		<link rel="stylesheet" href="css/base.css" />
		<link rel="stylesheet" href="css/gailan.css" />
		<script src="js/jquery-1.11.1.min.js"></script>
		<script>

			// 监听页面尺寸方法，配合rem实现自适应
			$(document).ready(function () {
				var whei = $(window).width();
				$("html").css({ fontSize: whei / 24 });
				$(window).resize(function () {
					var whei = $(window).width();
					$("html").css({ fontSize: whei / 24 });
				});
			});
		</script>
	</head>

	<body>
		<!-- 标题区域 -->
		<section class="header">
			<div class="logo">形势概览</div>
			<!-- 时间 -->
			<span id="showTime"></span>
			<!-- 公告栏滚动区 -->
			<div class="news clearfix">
				<i class="icon"></i>
				<div class="newlap clearfix" id="message1">
					<ul>
						<li>
							<%=userinfo.getUserName()%>
						</li>

					</ul>
				</div>
			</div>
		</section>

		<!-- 主内容区域 -->
		<div class="ContentArea">
			<div class="left">
				<!-- 水波图区域 -->
				<div class="liquidfill">
					<div class="qiu">
						<div class="qiutop" id="echart1"></div>
						<p>事故数</p>
					</div>
					<div class="qiu">
						<div class="qiutop" id="echart2"></div>
						<p>死亡人数</p>
					</div>
					<div class="qiu">
						<div class="qiutop" id="echart3"></div>
						<p>受伤人数</p>
					</div>
					<div class="qiu">
						<div class="qiutop" id="echart4"></div>
						<p>财产损失（万元）</p>
					</div>
				</div>
				<div class="below">
					<!-- 事故总数/死亡人数 -->
					<div class="chart h220 mb01">
						<div class="panel">
							<div class="itemtitle">事故总数/死亡人数分布统计</div>
							<div class="itembox h200">
								<ul class="clicktab">
									<li class="actab">事故数</li>
									<li class="">死亡人数</li>
								</ul>
								<ul class="contenttab">
									<li class="actent" style="height: 2.5rem" id="table1">1</li>
									<li class="h200" style="height: 2.5rem" id="table2">2</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- 事故总数/死亡人数 -->

					<!-- 增减率 -->
					<div class="chart h220 mb01">
						<div class="panel">
							<div class="itemtitle">事故总数/死亡人数同比增减率</div>
							<div
								class="itembox"
								id="table3"
								style="width: 100%; height: 2.6rem"
							></div>
						</div>
					</div>
					<!-- 增减率 end-->

					<!-- 事故数月度统计 -->
					<div class="chart h220 w49 fl mb01">
						<div class="panel">
							<div class="itemtitle">事故总数月度统计</div>
							<div
								class="itembox"
								style="width: 100%; height: 2.6rem"
								id="table4"
							></div>
						</div>
					</div>
					<!-- 事故数月度统计 end-->

					<!-- 死亡人数月度统计 -->
					<div class="chart h220 w49 fr">
						<div class="panel">
							<div class="itemtitle">死亡人数月度统计</div>
							<div
								class="itembox"
								style="width: 100%; height: 2.6rem"
								id="table5"
							></div>
						</div>
					</div>
					<!-- 死亡人数月度统计 end-->
				</div>
			</div>

			<!-- 地图部分 -->
			<div class="main">
				<div class="panel">
					<div class="itemtitle">3人事故分布</div>
					<div
						class="itembox"
						style="width: 100%; height: 11.5rem"
						id="map"
					></div>
					<!-- 地图上方数据1 -->
					<div class="no1">
						<div class="hd">
							<h4>三人事故总数</h4>
						</div>
						<div class="bd">
							<div class="plate fl">59</div>
							<div class="numtext fr">
								<span style="color: #12c4b3"
									>12%
									<li class="down"></li
								></span>
								<p>
									同比减少：<b style="font-size: 0.175rem; color: #fff">6</b>
								</p>
							</div>
						</div>
					</div>
					<!-- 地图上方数据2 -->
					<div class="no2">
						<div class="hd">
							<h4>三人事故死亡人数</h4>
						</div>
						<div class="bd">
							<div class="plate fl">9</div>
							<div class="numtext fr">
								<span style="color: #ff3d3d"
									>26%
									<li class="up"></li
								></span>
								<p>
									同比减少：<b style="font-size: 0.175rem; color: #fff">2</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 地图部分结束 -->

			<!-- 右侧信息滚动部分 -->
			<div class="right">
				<div class="general">
					<div class="panel">
						<div class="itemtitle">实时信息板</div>
						<div class="itembox">
							<div class="scroll-list">
								<ul>
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="major">
					<div class="panel">
						<div class="itemtitle">重大事故信息</div>
						<div class="itembox">
						
							<div class="scroll-list"  id="scroll">
								<ul>
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
	
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
	
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
	
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
	
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
	
									<li>
										<div class="time">
											<h4>2020/10/01 23:45:23</h4>
											<span><a href="#">查看</a></span>
										</div>
										<div class="roll-body">
											<table>
												<thead>
													<tr>
														<th>管理部门</th>
														<th>道路类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>陕西省交警支队</td>
														<td>城市道路</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>道路名</th>
														<th>车辆类型</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="road">
																高新区科技六路中段高新区科技路中段高新区科技路
															</p>
														</td>
														<td>一般车辆</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>死亡人数</th>
														<th>受伤人数</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>2</td>
														<td>3</td>
													</tr>
												</tbody>
											</table>
											<table>
												<thead>
													<tr>
														<th>事故原因</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<p class="text">
																“交通事故(Traffic
																Accident)”是指车辆在道路上因过错或者意外造成人身伤亡或者财产损失的事件。交通事故不仅是由不特定的人员违反道路交通安全法规造成的；也可以是由于地震、台风人身伤亡或者财产损失的事件交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安交通安交通事故不仅是由不特定的人员违反道路交通安交通事故不仅是由不特定的人员违反道路交通安
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			
			</div>
		</div>

		<script src="js/echarts.js"></script>
		<script src="js/echarts-liquidfill.js"></script>
		<script src="js/jQuery.marquee.js"></script>
		<script src="js/scrillbox.js"></script>
		<script src="js/xingshigailan.js"></script>
	</body>
</html>
