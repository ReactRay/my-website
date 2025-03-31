
export function ProjectVideo({ video }) {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 1, }}>
            <iframe
                src={`https://www.loom.com/embed/${video}`}
                frameBorder="0"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};

