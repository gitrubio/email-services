import 'dotenv/config'
export const config = {
    port : process.env.server_port,
    emails : {
        user: '',
        pass: '',
    }
}