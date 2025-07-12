using Microsoft.EntityFrameworkCore;
using MongoFramework;
using UserMicroservice.Models;

namespace UserMicroservice.Context
{
    public class MongoSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public class MongoAppDbContext : MongoDbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<UserAuditLog> UserAuditLogs { get; set; }
        public DbSet<AuthAuditLog> AuthAuditLogs { get; set; }

        public MongoAppDbContext() : base(CreateConnection())
        {
        }

        private static IMongoDbConnection CreateConnection()
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var connectionString = config["MongoSettings:ConnectionString"];
            var databaseName = config["MongoSettings:DatabaseName"];

            return MongoDbConnection.FromConnectionString($"{connectionString}/{databaseName}");
        }
    }
}
