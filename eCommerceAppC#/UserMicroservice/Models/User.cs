using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace UserMicroservice.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(15)]
        public string Username { get; set; }

        [Required]
        [MaxLength(20)]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        [Required]
        [MaxLength(15)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(15)]
        public string LastName { get; set; }

        [MaxLength(13)]
        public string? PhoneNumber { get; set; }

        public bool IsActive { get; set; } = true;

        public bool IsEmailVerified { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? LastLoginAt { get; set; }

        public DateTime? LastPasswordChangeAt { get; set; }

        public ICollection<Role> Roles { get; set; } = new List<Role>();

        public ICollection<Address> Addresses { get; set; } = new List<Address>();

        public ICollection<UserAuditLog> AuditLogs { get; set; } = new List<UserAuditLog>();

        public ICollection<AuthAuditLog> AuthAuditLogs { get; set; } = new List<AuthAuditLog>();
    }
}
