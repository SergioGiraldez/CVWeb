const e = React.createElement;

function Button(props){
  return e('button',{onClick:props.handleClick,id: props.name},null)
}

function MainPanel(props){
  switch(props.name) {
    case 'self':
      return e('p',{},'MYSELF');
    case 'studies':
      return e('p',{},'MYSTUDIES');
    case 'career':
      return e('p',{},'MYCAREER');
    default:
      return e('p',{},'NOPE');
  }
}

class ContentManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'self' };

    this.changeToMyself = this.changeToMyself.bind(this);
    this.changeToMystudies = this.changeToMystudies.bind(this);
    this.changeToMycareer = this.changeToMycareer.bind(this);
  }

  changeToMyself() {
    this.setState({value: 'self'});
  }

  changeToMystudies() {
    this.setState({value: 'studies'});
  }

  changeToMycareer() {
    this.setState({value: 'career'});
  }

  render() {
      return e(
        'div',{id: 'container'},e(
          'div',{id: 'button_container'},
            e(Button,{handleClick:this.changeToMyself,name:'myselfbtn'},null),
            e(Button,{handleClick:this.changeToMystudies,name:'studiesbtn'},null),
            e(Button,{handleClick:this.changeToMycareer,name:'careerbtn'},null)),
          e('div',{id: 'info_container'},e(MainPanel,{name:this.state.value},null))
      );
  }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(ContentManager,null,null), domContainer);
