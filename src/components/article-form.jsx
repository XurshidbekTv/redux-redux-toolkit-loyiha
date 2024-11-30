import React from 'react'
import { Input, TextArea } from '../ui'
import { useSelector } from 'react-redux'

const ArticleForm = props => {
  const {isLoading}= useSelector(state => state.article)
  const {title, setTitle, body, setBody, description, setDescription, formSubmit} = props
  return (
          <form onSubmit={formSubmit}>
                <Input label={'Title'} state={title} setState={setTitle}/>
                <TextArea label={'Description'} state={description} setState={setDescription}/>
                <TextArea label={'Body'} state={body} setState={setBody} height='300px'/>
                <button class="w-100 btn btn-lg btn-primary mt-4" disabled={isLoading} type="submit" >{
                  isLoading ? 'Loading...' : 'Create'  
                }</button>
            </form>
  )
}

export default ArticleForm