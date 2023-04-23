export interface Email {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export interface RequestEmail {
    titleFrom : string
    userFrom : string
    userTo: string;
    subject: string;
    text?: string;
    html: string;
}