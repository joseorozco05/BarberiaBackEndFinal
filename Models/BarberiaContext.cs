using Microsoft.EntityFrameworkCore;

namespace BarberiaBackEnd.Models
{
    public class BarberiaContext: DbContext
    {
        public BarberiaContext(DbContextOptions<BarberiaContext> options) :
        base(options)
        {

        }
        public DbSet<ServicioItem> ServicioItems { get; set; }
        public DbSet<UsuarioItem> UsuarioItems { get; set; }
    }
}