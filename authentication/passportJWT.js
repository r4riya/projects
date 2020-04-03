var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'shhhhh';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
const JWTStrategy =(passport)=>{
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    if (jwt_payload) {
        return done(null, jwt_payload);
    } else {
        return done(null, false);
        // or you could create a new account
    }

}));
}
module.exports={
    JWTStrategy
}