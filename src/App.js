import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { StreamList } from './components/streams/StreamList'
import { StreamShow } from './components/streams/StreamShow'
import { StreamEdit } from './components/streams/StreamEdit'
import StreamCreate from './components/streams/StreamCreate'
import { StreamDelete } from './components/streams/StreamDelete'

export const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </BrowserRouter>
        </div>
    )
}
