'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

function Button(props) {
  return e('div', { className: props.clas }, e('button', { onClick: props.handleClick, id: props.name }, props.txt));
}

function MainPanel(props) {
  switch (props.name) {
    case 'self':
      // MYSELF panel text
      return e('div', { className: 'info_subcontainer', id: 'self_selected' }, e('h1', { className: 'container_title' }, 'MYSELF'), e('div', { className: 'text_inbox' }, e('p', {}, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')), e('p', { className: 'inner_paragraph' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
    case 'studies':
      return e('div', { className: 'info_subcontainer', id: 'studies_selected' }, e('h1', { className: 'container_title' }, 'MY STUDIES'), e('p', {}, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
    case 'career':
      return e('div', { className: 'info_subcontainer', id: 'career_selected' }, e('h1', { className: 'container_title' }, 'MY CAREER'), e('p', {}, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
    default:
      return e('div', { className: 'info_subcontainer', id: 'none_selected' }, e('h1', { className: 'container_title' }, 'NOPE'), e('p', {}, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
  }
}

var ContentManager = function (_React$Component) {
  _inherits(ContentManager, _React$Component);

  function ContentManager(props) {
    _classCallCheck(this, ContentManager);

    var _this = _possibleConstructorReturn(this, (ContentManager.__proto__ || Object.getPrototypeOf(ContentManager)).call(this, props));

    _this.state = { value: 'self' };

    _this.changeToMyself = _this.changeToMyself.bind(_this);
    _this.changeToMystudies = _this.changeToMystudies.bind(_this);
    _this.changeToMycareer = _this.changeToMycareer.bind(_this);
    return _this;
  }

  _createClass(ContentManager, [{
    key: 'changeToMyself',
    value: function changeToMyself() {
      this.setState({ value: 'self' });
    }
  }, {
    key: 'changeToMystudies',
    value: function changeToMystudies() {
      this.setState({ value: 'studies' });
    }
  }, {
    key: 'changeToMycareer',
    value: function changeToMycareer() {
      this.setState({ value: 'career' });
    }
  }, {
    key: 'render',
    value: function render() {
      return e('div', { id: 'container' }, e('div', { id: 'button_container' }, e(Button, { handleClick: this.changeToMyself, name: 'myselfbtn', txt: 'MY SELF', clas: this.state.value }, null), e(Button, { handleClick: this.changeToMystudies, name: 'studiesbtn', txt: 'STUDIES', clas: this.state.value }, null), e(Button, { handleClick: this.changeToMycareer, name: 'careerbtn', txt: 'CAREER', clas: this.state.value }, null)), e('div', { id: 'info_container' }, e(MainPanel, { name: this.state.value }, null)));
    }
  }]);

  return ContentManager;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(e(ContentManager, null, null), domContainer);
