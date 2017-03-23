import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
	constructor(props){
		super()
		this.state = {
			count : 0
		}
	}
	componentDidMount(){
		setTimeout(function () {
			console.log('【Update】')
			this.setState({
				count : 2
			})
			setTimeout(function () {
				console.log('【Unmount】删除子组件，触发子组件的componentWillUnmount')
				this.setState({
					count : 4
				})
			}.bind(this),4000)
		}.bind(this),2000)
	}
	render(){
		return (
			<div>
				<h1>hello world</h1>
				{
					this.state.count !== 4 
					?<Child count={this.state.count} />
					:''
				}
			</div>
		)
	}
}

class Child extends React.Component{
	constructor(props){
		console.log('【Mounted】')
		super(props)
		console.log('【Mounted1】已设置默认属性hello：' + this.props.hello)
		this.state = {
			name : 'child'
		}
		console.log('【Mounted2】已设置默认状态name：' + this.state.name)
	}
	componentWillMount(){
		console.log('【Mounted3】componentWillMount')
	}
	componentDidMount(){
		console.log('【Mounted5】componentDidMount')
		
	}

	componentWillReceiveProps(){
		console.log('【update1】componentWillReceiveProps')
	}
	shouldComponentUpdate(){
		console.log('【update2】shouldComponentUpdate')
		return true
	}
	componentWillUpdate(){
		console.log('【update3】componentWillUpdata')
	}
	componentDidUpdate(){
		console.log('【update5】componentDidUpdate')
	}
	
	componentWillUnmount(){
		console.log('【Unmount1】componentWillUnmount')
	}
	render(){
		console.log('【Mounted4 & update4】render')
		return(
			<div ref="child">
				<h1>child</h1>
				{this.props.count}
			</div>
		)
	}
}

Child.propTypes = {
	hello : React.PropTypes.string
}
Child.defaultProps = {
	hello : "world"
}


ReactDom.render(
	<App />,
	document.getElementById('root')
)