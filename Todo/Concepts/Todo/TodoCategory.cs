using Dolittle.Concepts;

namespace Concepts.Todo
{
    public class TodoCategory : ConceptAs<string>
    {
        public static implicit operator TodoCategory(string category) => new TodoCategory { Value = category };
    }
}