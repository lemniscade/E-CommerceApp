using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace UserMicroservice.Models
{
    public class UserAuditLog
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public long UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [Required]
        [MaxLength(50)]
        public string Action { get; set; }

        [Required]
        public string DetailsJson { get; set; }

        [MaxLength(45)]
        public string IpAddress { get; set; }

        [Required]
        public string DeviceInfoJson { get; set; } // JSONB

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [NotMapped]
        public JsonDocument Details
        {
            get => JsonDocument.Parse(DetailsJson);
        }

        [NotMapped]
        public JsonDocument DeviceInfo
        {
            get => JsonDocument.Parse(DeviceInfoJson);
        }
    }
}
