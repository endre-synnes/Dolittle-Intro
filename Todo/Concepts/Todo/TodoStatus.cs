using Dolittle.Concepts;

namespace Concepts.Todo
{
    public class TodoStatus : ConceptAs<bool>
    {
        public static implicit operator TodoStatus(bool status) => new TodoStatus { Value = status };
    }
}