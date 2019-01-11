using Dolittle.Concepts;

namespace Concepts.Todo
{
    public class TodoText : ConceptAs<string>
    {
        public static implicit operator TodoText(string text) => new TodoText { Value = text };
    }
}