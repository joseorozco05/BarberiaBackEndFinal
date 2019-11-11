using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BarberiaBackEnd.Models;

namespace BarberiaBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicioController : ControllerBase
    {
        private readonly BarberiaContext _context;
        public ServicioController(BarberiaContext context)
        {
            _context = context;
            if (_context.ServicioItems.Count() == 0)
            {

                _context.ServicioItems.Add(new ServicioItem { NomServicio = "Priorizar el proyecto", Descripcion = "Priorizar" });
                _context.ServicioItems.Add(new ServicioItem { NomServicio = "Calendario el proyecto", Descripcion = "Priorizar" });
                _context.SaveChanges();
            }
        }

        // GET: api/Servicio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServicioItem>>> GetServicioItems()
        {
            return await _context.ServicioItems.ToListAsync();
        }

        // GET: api/Servicio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServicioItem>> GetServicioItem(int id)
        {
            var servicioItem = await _context.ServicioItems.FindAsync(id);
            if (servicioItem == null)
            {
                return NotFound();
            }
            return servicioItem;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<ServicioItem>> PostServicioItem(ServicioItem item)
        {
            _context.ServicioItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetServicioItem), new { id = item.Id }, item);
        }

        // PUT: api/Servicio/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicioItem(int id, ServicioItem
        item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicioItem(int id)
        {
            var ServicioItem = await
            _context.ServicioItems.FindAsync(id);
            if (ServicioItem == null)
            {
                return NotFound();
            }
            _context.ServicioItems.Remove(ServicioItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}