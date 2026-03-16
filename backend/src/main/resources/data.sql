-- Only seed if tables are empty
INSERT IGNORE INTO benefits_plans (id, name, network, deductible, deductible_met, copay, coinsurance_pct, oop_max, oop_met) VALUES
(1, 'BlueCross PPO Gold',   'BlueCross PPO',  1500.00, 800.00,  30.00, 20, 6000.00, 2200.00),
(2, 'Aetna HMO Standard',   'Aetna HMO',      2500.00, 0.00,    40.00, 30, 8000.00, 0.00),
(3, 'United Premium Choice', 'United Premium',  1000.00, 1000.00, 20.00, 10, 4000.00, 3100.00);

INSERT IGNORE INTO members (id, name, email, plan_id) VALUES
(1, 'Alice Thompson', 'alice@example.com', 1),
(2, 'Bob Martinez',   'bob@example.com',   2),
(3, 'Carol Chen',     'carol@example.com', 3);

INSERT IGNORE INTO help_requests (id, member_id, subject, description, status) VALUES
(1, 1, 'Explain my EOB',          'I received an EOB for my recent lab work and the numbers don''t make sense.', 'open'),
(2, 1, 'Find cheaper lab option',  'My last blood panel cost $400 out of pocket. Are there cheaper in-network labs?', 'in_progress'),
(3, 2, 'New member questions',     'I just enrolled and want to understand how my deductible works.', 'open'),
(4, 3, 'Claim denied',             'My claim for physical therapy was denied. Can someone help me appeal?', 'resolved');

-- Generate 50,000 providers (only if table is empty)
SET @provider_count = (SELECT COUNT(*) FROM providers);
SET SESSION cte_max_recursion_depth = 50000;

INSERT INTO providers (name, specialty, network, latitude, longitude, cost_score, quality_score, accepting_patients)
SELECT
    CONCAT(
        ELT(1 + (n % 10), 'Dr.', 'Dr.', 'Dr.', 'Dr.', 'Dr.', 'Dr.', 'Dr.', 'Dr.', 'NP', 'PA'),
        ' ',
        ELT(1 + (n % 20), 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
            'Davis', 'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson',
            'Martin', 'Lee', 'Thompson', 'White', 'Harris'),
        ' ', n
    ),
    ELT(1 + (n % 8), 'Primary Care', 'Cardiology', 'Orthopedics', 'Dermatology',
        'Pediatrics', 'Neurology', 'Oncology', 'Psychiatry'),
    ELT(1 + (n % 3), 'BlueCross PPO', 'Aetna HMO', 'United Premium'),
    37.7749 + (RAND() - 0.5) * 2,
    -122.4194 + (RAND() - 0.5) * 2,
    1 + (n % 5),
    1 + ((n * 3) % 5),
    n % 10 != 0
FROM (
    WITH RECURSIVE seq AS (
        SELECT 1 AS n UNION ALL SELECT n + 1 FROM seq WHERE n < 50000
    )
    SELECT n FROM seq
) AS nums
WHERE @provider_count = 0;
