(function() {
	var userId = 8,
	url = 'http://developers.deezer.com/examples/channel.php',
	domContainer = 'player',
	playlistBool = true,
	widthPlayer = 650,
	heightPlayer = 300,
	light = 1; //between 0 & 4
	
	var angularTheme = angular.module("angularThemeLiTYS", []);

	angularTheme.controller("angularThemeControllerLiTYS", AngularThemeControllerLiTYS);

	function AngularThemeControllerLiTYS($scope)
	{
		
		DZ.init({
			appId  : 'userId',
			channelUrl : url,
			player : {
				container : domContainer,
				playlist : playlistBool,
				widthPlayer : 650,
				heightPlayer : 300,
				onload : refreshTracks
			}
		});
	
		var currentTracks =[3135557, 1152226];
		var lightId = light;

		$scope.getTraks=function()
		{
			return currentTracks;
		}

		$scope.setId1=function()
		{
			lightId=1;
			refreshTracks();
		}

		$scope.setId5=function()
		{
			lightId=5;
			refreshTracks();
		}

		function refreshTracks()
		{
			switch (lightId)
			{
				case 1:
					currentTracks =[141433453, 15264305];
					        			console.log('case 0 light');
					        			console.log(currentTracks);
				break;
				case 5:
					currentTracks =[3135557, 1152226];
					        			console.log('case 5 light');

				break;
				default:
        			console.log('case default light');

			}

			DZ.player.playTracks($scope.getTraks());

			
		}
	}



})();
