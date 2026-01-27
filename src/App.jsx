import React from 'react'

function App() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Flashcard App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Manage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Flashcards</h2>
        <button className="btn btn-success">Add New</button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">What is the capital of France?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">Paris</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">What is 2 + 2?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">4</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">Who wrote "Romeo and Juliet"?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">William Shakespeare</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">What is the largest planet in our solar system?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">Jupiter</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">What does HTML stand for?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">HyperText Markup Language</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">What year did World War II end?</p>
              </div>
              <div className="flashcard-back">
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">1945</p>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-sm btn-primary me-2">Update</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>


    </div>

  </>
}

export default App;