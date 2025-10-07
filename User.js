class User {
  constructor(username,email){
    this.username=username;
    this.email=email;
    this.requests=[];
    this.completed=0; // count completed helps
  }
  postRequest(title,desc,category){
    // Assuming Request class is defined elsewhere
    const req=new Request(title, desc, category, this);
    this.requests.push(req);
    return req;
  }
  acceptRequest(req){
    req.assignVolunteer(this);
    this.requests.push(req);
  }
  completeRequest(req){
    req.markCompleted();
    this.completed++;
  }
}
