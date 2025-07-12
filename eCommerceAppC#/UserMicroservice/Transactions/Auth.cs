namespace UserMicroservice.Transactions
{
    public class JwtSettings
    {
        public string SecretKey { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public int ExpiryInMinutes { get; set; }
    }

    public class Auth
    {
        public bool RegisterUser(string email, string password)
        {
            
        }
    }
}
