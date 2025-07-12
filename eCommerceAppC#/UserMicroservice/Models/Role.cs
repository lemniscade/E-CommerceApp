using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Net.NetworkInformation;

namespace UserMicroservice.Models
{
public class Role
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public short Id { get; set; }

        [Required]
        [MaxLength(10)]
        public string Name { get; set; }

        [MaxLength(255)]
        public string? Description { get; set; }
    }

}
