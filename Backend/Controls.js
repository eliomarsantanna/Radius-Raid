	<head>
		<title>Radius Raid</title>
		<link rel="shortcut icon" id="favicon" />

		<style>
			body {
				background: #080808;
			}

			#wrap {
				background: #222;
				box-shadow: inset 0 0 0 1px #404040, 0 0 0 1px #000;
				left: 50%;
				opacity: 0;
				padding: 10px;
				position: absolute;
				top: 50%;
				transition: opacity 1.5s;
			}

			.loaded #wrap {
				opacity: 1;
			}

			#wrap-inner {
				background: #000;
				overflow: hidden;
				position: relative;
			}

			canvas {
				cursor: crosshair;
				display: block;
				left: 0;
				position: absolute;
				top: 0;
			}

			.joystick {
				width: 120px;
				height: 120px;
				position: absolute;
				top: calc(60% - 60px);
			}

			#left-joystick.joystick {
				left: 90px;
			}

			#right-joystick.joystick {
				right: 90px;
			}
		</style>
	</head>
	<body>
		<div id="left-joystick" class="joystick"></div>
		<div id="right-joystick" class="joystick"></div>
		<div id="wrap">
			<div id="wrap-inner">
				<canvas id="cbg1"></canvas>
				<canvas id="cbg2"></canvas>
				<canvas id="cbg3"></canvas>
				<canvas id="cbg4"></canvas>
				<canvas id="cmg"></canvas>
				<canvas id="cfg"></canvas>
			</div>
		</div>
		<script>var $ = {};</script>
		<script src="js/touch-compat.js"></script>
		<script src="js/jsfxr.js"></script>
		<script src="js/util.js"></script>
		<script src="js/storage.js"></script>
		<script src="js/definitions.js"></script>
		<script src="js/audio.js"></script>
		<script src="js/text.js"></script>
		<script src="js/hero.js"></script>
		<script src="js/enemy.js"></script>
		<script src="js/bullet.js"></script>
		<script src="js/explosion.js"></script>
		<script src="js/powerup.js"></script>
		<script src="js/particle.js"></script>
		<script src="js/particleemitter.js"></script>
		<script src="js/textpop.js"></script>
		<script src="js/levelpop.js"></script>
		<script src="js/button.js"></script>
		<script src="js/game.js"></script>
	</body>
</html>
