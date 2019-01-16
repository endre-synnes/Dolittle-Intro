using Dolittle.Commands.Handling;
using Dolittle.Domain;
namespace Domain.Todo
{
    public class CommandhandlerTodo : ICanHandleCommands
    {
        private readonly IAggregateRootRepositoryFor<AggregateRootTodo> _aggregate;

        public CommandhandlerTodo(IAggregateRootRepositoryFor<AggregateRootTodo> aggregate)
        {
            _aggregate = aggregate;
        }

        public void Handle(CommandCreateTodo cmd)
        {
            var root = _aggregate.Get(cmd.Id);
            root.CreateTodo(cmd.Text, cmd.Category, cmd.Status);
        }
        
    }
}
