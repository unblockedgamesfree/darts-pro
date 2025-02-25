var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1920;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 0;

var FONT = "impact";
var ENABLE_FULLSCREEN;

var FPS      = 30;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_MODE    = 2;
var STATE_LEVEL   = 3;
var STATE_GAME    = 4;

var MODE_SINGLE = 0;
var MODE_VS_CPU = 1;
var MODE_VS_HUMAN = 2;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_BUT_YES_DOWN  = 4;
var ON_BACK_MENU = 5;
var ON_RESTART = 6;
var ON_NEXT = 7;
var ON_DART_GUI_END_MOVE_DOWN = 8;
var ON_DART_GUI_END_MOVE_UP = 9;

var CUR_GRID_SCALE = 1;

var NUM_SPRITE_DART = 26;
var DART_WIDTH = 332;
var DART_HEIGHT = 1320;

var MAX_SWIPE_TIME = 250;
var MIN_DIST_SWIPE = 100;
var FORCE_MULTIPLIER = 7.2;
var MAX_FORCE = 258*FORCE_MULTIPLIER;
var MAX_DART_ANGLE_ROT = 45;
var RADIUS_SPHERE_BOARD = 160;
var SLICE_ANGLE = 18;
var SLICE_VALUES_RIGHT = [20,1,18,4,13,6,10,15,2,17,3];
var SLICE_VALUES_LEFT = [20,5,12,9,14,11,8,16,7,19,3];
var TIME_DART_MOVE_X = 2000;
var STARTING_SCORE = 501;
var MAX_NUM_THROW = 99;

var NUM_THROW_PER_TURN = 3;
var POINTS_DARTBOARD_CENTER = [50,25];

var DIST_SLICES = [17,44,241,265,402,430];
var STROKE_COLORS = ["#0187b0","#089e01","#c16400","#cd0224"];


var NUM_COLS_PAGE_LEVEL = 4;
var NUM_ROWS_PAGE_LEVEL = 2;
var NUM_LEVELS = 8;
var AI_ACCURACY = [1,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2];