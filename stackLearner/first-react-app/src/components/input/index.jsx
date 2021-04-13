import React from 'react';

class Input extends React.Component {

    state= {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    };

    handleChangeBox = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkillChange = event => {

        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            }) 
        } else{
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({skills})
        }
    }

    render(){
        const {name, country, bio, birthday, agree, skills}=this.state
        return (
            <div>
                <input className='form-control my-2' value={name} type="text" name='name' onChange={this.handleChange} placeholder='Abu Jafor'/>

                <select className='form-control my-2' value={country} name="country" onChange={this.handleChange} id="">
                    <option >Select Country--</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="srilanka">Sri Lanka</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="nepal">Nepal</option>
                </select>

                <textarea  onChange={this.handleChange} value={bio}  className='form-control my-2' name="bio" placeholder='Tell Me About Yourself'></textarea>
                <input onChange={this.handleChange} value={birthday} className='form-control my-2' type="date" name='birthday'/>
                <div>
                    <input type="radio" value='Male' name='gender' onChange={this.handleChange}/> Male
                    <input type="radio" value='Female' name='gender' onChange={this.handleChange}/> Female
                    <input type="radio" value='Other' name='gender' onChange={this.handleChange}/> Other
                </div>

                <div>
                    <input type="checkbox" name='skills' value='Python' checked={skills.includes('Python') } onChange={this.handleSkillChange}/> Python
                    <input type="checkbox" name='skills' value='C++' checked={skills.includes('C++') } onChange={this.handleSkillChange}/> C++
                    <input type="checkbox" name='skills' value='Javascript' checked={skills.includes('Javascript') } onChange={this.handleSkillChange}/> Javascript
                    <input type="checkbox" name='skills' value='Java' checked={skills.includes('Java') } onChange={this.handleSkillChange} /> Java
                </div>
                <div>
                    <input type="checkbox" checked={agree} name='agree' onChange={this.handleChangeBox}/> I agree will all terms and condition
                </div>
                <button onClick={() => console.log(this.state)}>
                    Show Data
                </button>
            </div>
            
        );

    }
}

export default Input;