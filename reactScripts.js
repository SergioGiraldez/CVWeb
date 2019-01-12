const e = React.createElement;

function Button(props){
  return e('div',{className: props.clas},e('button',{onClick:props.handleClick,id: props.name},props.txt))
}

function MainPanel(props){
  switch(props.name) {
    case 'self':
      // MYSELF panel text
      return e('div',{className: 'info_subcontainer',id:'self_selected'},
				e('h1',{className: 'container_title'},'MYSELF'),
				e('div',{className: 'text_inbox'},e('p',{},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')),
        e('p',{className: 'inner_paragraph'},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
				);
    case 'studies':
      return e('div',{className: 'info_subcontainer',id:'studies_selected'},
				e('h1',{className: 'container_title'},'MY STUDIES'),
				e('p',{},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
				);
    case 'career':
      return e('div',{className: 'info_subcontainer',id:'career_selected'},
				e('h1',{className: 'container_title'},'MY CAREER'),
				e('p',{},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
				);
    default:
      return e('div',{className: 'info_subcontainer',id:'none_selected'},
				e('h1',{className: 'container_title'},'NOPE'),
				e('p',{},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
				);
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
            e(Button,{handleClick:this.changeToMyself,name:'myselfbtn',txt:'MY SELF',clas:this.state.value},null),
            e(Button,{handleClick:this.changeToMystudies,name:'studiesbtn',txt:'STUDIES',clas:this.state.value},null),
            e(Button,{handleClick:this.changeToMycareer,name:'careerbtn',txt:'CAREER',clas:this.state.value},null)),
          e('div',{id: 'info_container'},e(MainPanel,{name:this.state.value},null))
      );
  }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(ContentManager,null,null), domContainer);
