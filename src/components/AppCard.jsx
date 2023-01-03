import React from 'react';

export default function AppCard({ notes, onAddNote, onDeleteNote }) {
    return (
        <div>
            <section>
              <div className="container">
                  <header>
                      <h1 className="title__header">Notes DOK</h1>
                      <nav>
                          <ul className="ul__header">
                              <li className="transition"><button onClick={onAddNote}>New Note</button></li>
                              <a className="transition" href="https://www.buymeacoffee.com/AntonBelousov">Coffee</a>
                          </ul>
                      </nav>
                  </header>
              </div>
            </section>
            <section className="section_content__note">
              <div className="container">
                  <div className="item_note__card">
                      {notes.map((note) => (
                        <div className="content__note-section">
                            <div className="content__card">
                                <input className="input__card" placeholder="Title" type="text" />
                                <hr className="hr__card" />
                                <textarea placeholder="Text Note" className="textarea__card" cols="30" rows="10"></textarea>
                                <button className="button__card transition" onClick={() => onDeleteNote(note.id)}>Delete</button>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
            </section>
        </div>
    )
}