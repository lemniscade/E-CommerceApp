using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace UserMicroservice.Models
{
    public class AuthAuditLog
    {
        [Key]
        public long Id { get; set; }

        public long? UserId { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; }

        [Required]
        [MaxLength(50)]
        public string EventType { get; set; }

        [Required]
        [MaxLength(45)]
        public string IpAddress { get; set; }

        [Required]
        [MaxLength(255)]
        public string UserAgent { get; set; }

        public string? LocationDataJson { get; set; }

        public bool IsSuccessful { get; set; }

        [MaxLength(255)]
        public string? FailureReason { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [NotMapped]
        public JsonDocument? LocationData =>
            LocationDataJson == null ? null : JsonDocument.Parse(LocationDataJson);
    }
}
