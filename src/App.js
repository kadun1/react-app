import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            selected_content_id:2,
            subject:{title:'WEB', sub:'World Wide Web!'},
            welcome:{title:'Welcome', desc:'Hello, Recat!!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is HyperText ...' },
                {id:2, title:'CSS', desc:'CSS is for design' },
                {id:3, title:'JavaScript', desc:'HTML is for interactive' }
            ]
        }
    }
    render() {
        console.log('App render');
        var _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.title;
        } else if(this.state.mode === 'read'){
            var i = 0;
            while (i < this.state.contents.length){
                var date = this.state.contents[i];
                if(date.id === this.state.selected_content_id){
                    _title = date.title;
                    _desc = date.desc;
                    break;
                }
                i = i + 1;
            }
        }
        console.log('render',this);
        return (
        <div className="App">
             <Subject
                title={this.state.subject.title}
                sub={this.state.subject.sub}
                onChangePage={function (){
                    this.setState({mode:'welcome'});
                }.bind(this)}
             >
            </Subject>
            <TOC onChangePage={function (id){
                this.setState({
                    mode:'read',
                    selected_content_id:Number(id)
                })
            }.bind(this)}
                 data={this.state.contents}></TOC>
            <Content title={_title} desc={_desc}></Content>
        </div>
        );
    }
}

export default App;
