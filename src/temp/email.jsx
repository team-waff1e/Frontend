function Email() {
  return (
    <>
      <div>
        <h1>Email</h1>
      </div>
      <div>
        <p>컴포넌트: 이메일 중복 체크</p>
      </div>
      <div
        className="vw-100 vh-100 fixed-top d-flex
      justify-content-center align-items-center"
      >
        <div
          className="card al bg-body-secondary opacity-100"
          style={{ width: 300 }}
        >
          <div className="card-body d-flex flex-column text-center">
            <p className="card-text fw-bold">
              This email is valid. <br />
              Are you sure to use this?
            </p>
            <div>
              <button type="button" className="btn btn-success m-2">
                Confirm
              </button>
              <button type="button" className="btn btn-danger m-2">
                Cancle
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Email;
