// extend global model provide additional useful vars at runtime and export it
module.exports = function() {
	var gameModes = [
        {
          title: 'Quick Play',
          link: '/quickPlayMode'
        },
        {
          title: 'Arcade Play',
          link: '/arcadePlayMode'
        }
      ];
	return gameModes;
};

