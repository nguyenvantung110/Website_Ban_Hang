using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

namespace QuanLyBanHang.Data
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        [StringLength(100)]
        public string ProductName { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        [StringLength(100)]
        public string ProductDescpt { get; set; }
        public string ProductFileName { get; set; }
    }
}
